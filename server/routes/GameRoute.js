const express = require("express") ;
const router = express.Router();
const asyncHandler = require("express-async-handler");
const gameCntrl = require("../controllers/GameController");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//parse header and pass inside to next midlleware
//this for protecting route ,giving access permission to authorised user !!
router.use(function(req,res,next){
    const authorization =  req.headers.authorization.split(" ") ;
  
    const bearer = authorization[0];
    const token = authorization[1];
  
    if((bearer!==undefined)&&(token!==undefined)&&(bearer==="bearer"))
    {
      //verify token
      jwt.verify(token,process.env.JWT_SECRET,function(err,decodedData){
        if(err) res.send({status:0,message:"unauthorized user"});
        else 
        {
            req.data = decodedData ;
            next();
        }
      })
    }
    else res.send({status:0,message:"invalid token"}) ;
})

// for getting question of user 
router.get("/",asyncHandler(gameCntrl.getQuestion));

//verfying answer of question
router.post("/verify",asyncHandler(gameCntrl.verifyAnswer)); 


module.exports =  router ;