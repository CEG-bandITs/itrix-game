const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = mongoose.Schema ;


//day schema 

const DaySchema={
    level:{
        type:Number ,
        default:0,
        required:false 
    },
    startedAt : {
        type:String ,
        default : ""
    },
    isStarted : {
        type:Boolean,
        default:false
    }
};


//main user schema 
const UserSchema = new schema({
    
    name:{
        firstName:{
            type:String ,
            required:"first name is required",
            trim:true ,
            unique:false ,
            minlength:[3,"too short first name"],
            maxlength:[20,"too long first name"] 
        },
        lastName:{
            type:String ,
            required:"last name is required",
            trim:true ,
            unique:false, 
            minlength:[3,"too short last name"],
            maxlength:[20,"too long last name"] 
        }
    },

    email :{
        type:String ,
        trim:true ,
        lowercase:true ,
        unique:true ,
        required:true 
    },

    password : String,

    college :{
        type:String ,
        trim:true ,
        required:"college is required !!"
    },

    day1 : DaySchema ,
    day2 : DaySchema ,
    day3 : DaySchema 

},{timestamps:true});


// hashing password just before saving instance 
UserSchema.pre('save',async function(next){

    let user =this ;
     
    //generating salt for hashing 
    const salt =  await bcrypt.genSalt(10);

   //hashed password
   const hash =await bcrypt.hash(this.password,salt);

   //storing hashed password 
   this.password  = hash ;
   next();
})


//method for validating plain password against hashed one 
UserSchema.methods.ValidatePassword = async function (plainPassword){

    const validPassword = await bcrypt.compare(plainPassword,this.password);
    return validPassword ;
}


const UserModel = mongoose.model("User",UserSchema);



module.exports = UserModel ;