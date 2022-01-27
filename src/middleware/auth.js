const path = require("path");

function isAuth(req,res,next)
{
    var login_status = false;
    // as of now assume user is logined !! 
    if(login_status===false)
    {
        if(req.originalUrl==="/")
        {
        var options ={
            root :path.join(__dirname,"..","public","home","index")
        }
        res.sendFile("index.html",options);
    }
        else next();
    }
    else 
    {
        next();
    }
}

module.exports = isAuth ;
