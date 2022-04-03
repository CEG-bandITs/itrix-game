const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../db/UserModel");

/*
    @desc POST /api/users/auth/
    actions :verify user , generate token and set token as cookie
*/
async function Auth(req, res) {

  const email =req.body.email  ;
  const password =req.body.password ;
  const data = { email: email,
                 password: password};
  
  const user =await  User.findOne({email:data.email})
  
  if(!user)  
  
  res.send({message:"User not found"});

  else 
  {
  
    const valid = await user.ValidatePassword(data.password) ;
    if(valid)
    {
      //todays date 
      var  today = new Date().toLocaleDateString();

      const data ={
        name: user.name ,
        email: user.email ,
        
      } ;
  
      const token = JWTTokenGenerator(data)
      
      res.send({message:"success",token:token,data:data}) ;

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
  
  const body= req.body ;
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
  const authorization =  req.headers.authorization.split(" ") ;
  
  const bearer = authorization[0];
  const token = authorization[1];

  if((bearer!==undefined)&&(token!==undefined)&&(bearer==="bearer"))
  {
    //verify token
    jwt.verify(token,process.env.JWT_SECRET,function(err,decodedData){
      if(err) res.send({message:"failed"});
      else res.send({ message:"success",data : decodedData });
    })
  }
  else res.send({message:"failed"}) ;
  

  
}





module.exports = {
  Auth,
  CreateUser,
  Details,
};
