const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../db/UserModel");

/*
    @desc POST /api/users/auth/
    actions :verify user , generate token and set token as cookie
*/
async function Auth(req, res) {

  const data = { email: req.body.email ,
                 password: req.body.password };
  
  const user =await  User.findOne({email:data.email})
  
  if(!user)  
  
  res.send({message:"User not found"});

  else 
  {
  
    const valid = await user.ValidatePassword(data.password) ;
    if(valid)
    {
      let response = res ;

      const token = JWTTokenGenerator({
        name: user.name ,
        day1: user.day1 ,
        day2: user.day2 ,
        day3: user.day3 ,
        email: user.email 
      })
      response.cookie("JWT-Token",token) ;
      response.send({message:"success"}) ;

    }
   
    else 
    res.send({message:"Wrong Credentials"})
  }


 
}

const JWTTokenGenerator = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};


/*
    @desc POST /api/users/new
    actions :create new user , generate token and set token as cookie
*/
async function CreateUser(req, res) {
  const body =req.body ;

  const data ={
    name :{
      firstName:body.fname.value,
      lastName :body.lname.value 
    },
    college : body.clg.value,
    password : body.passwd.value,
    email : body.email.value 
  }

  var user = new User(data);
  const is_exists = await User.exists({email:data.email}) ;

  if(is_exists) res.send({message:"Account already exists"});

  else 
  {
  await user.save(function(err,results){
    if(err) 
    res.send({message:"some server error"}) ;
    else res.send({message:"success"});
  });
  }
}


/*
    @desc GET /api/users/details
    actions :parse cookie 
*/
async function Details(req, res) {

  //parse token 
  const token = req.cookies['JWT-Token'];
  //verify token
  console.log(token)
  jwt.verify(token,process.env.JWT_SECRET,function(err,decodedData){
    if(err) res.send({message:"failed"});
    else res.send({ message:"success",data : decodedData });
  })

  
}





module.exports = {
  Auth,
  CreateUser,
  Details,
};
