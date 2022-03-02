const jwt =require("jsonwebtoken");
require("dotenv").config()

// @desc POST /api/users/auth  
// actions :verify user , generate token and set token as cookie
async function Auth(req,res)
{
    // for example 
    const data ={'name':'unknown','email':'k@gmail.com'}
    const token = JWTTokenGenerator(data);
    console.log(token)
    res.json({'data':req.body});
} 



// @desc POST /api/users/new 
//actions :create new user , generate token and set token as cookie 

async function CreateUser(req,res)
{
    res.send({'message':req.body});
}

//@desc GET /api/users/details 
//actions :parse cookie and if correct send details
async function Details(req,res)
{
    res.send({'message':'verifying user'});
}


const JWTTokenGenerator = (payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET)
}

module.exports ={
    Auth ,
    CreateUser,
    Details
}