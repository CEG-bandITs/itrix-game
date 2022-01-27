const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
	var options ={
		root :path.join(__dirname,"..","public","home","home_page")
	}
	res.sendFile("home.html",options);
})



module.exports = app;
