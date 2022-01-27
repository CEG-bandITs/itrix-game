const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const root = require('./routes/root');
const Restrict = require("./middleware/restrict");
const port_number = parseInt(process.env.PORT) || 3000 ;
const isAuth = require("./middleware/auth");


//checking authentication   
app.use(isAuth);

//router 
app.use(root);

//only allow .js and .css file extension  
app.use(Restrict);

//serving static files 
app.use(express.static(path.join(__dirname,"public")));


//page not found 
app.use(function(req,res){
	res.send("404 not found!!");
})



app.listen(port_number, () => {
	console.log(`Started Listening At PORT ${port_number} ... `);
})
