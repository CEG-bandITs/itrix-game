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

//Days 

var  day_1 = new Date()
var  day_2 = new Date(day_1.getTime()+(24*60*60*1000))
var  day_3 = new Date(day_1.getTime()+(2*24*60*60*1000))

const getDate =(day)=>{
    return(day.toLocaleDateString());
}

day_1=getDate(day_1);
day_2=getDate(day_2) ;
day_3=getDate(day_3) ;

let Dates = {};
Dates[day_1]=DaySchema ;
Dates[day_2]=DaySchema ;
Dates[day_3] =DaySchema ;


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

   Dates

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