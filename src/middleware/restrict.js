function  Restrict(req,res,next)
{

	var url = req.originalUrl ;
	if(url.substring(url.length-4,url.length)==="html")
	{
		res.send("not found !!");
	}

	else
    { 
	next();
    }

}

module.exports = Restrict ;