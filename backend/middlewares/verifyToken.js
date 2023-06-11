const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    
    if(!req.headers.authorization)return res.status(403).json({msg : "No token available!"});

    if(req.headers.authorization.startsWith('Bearer ')){
        const token = req.headers.authorization.split(" ")[1];
        
        jwt.verify(token,process.env.JWT_SECRET, (err,data)=>{
            if(err)res.status(403).json({msg : "wrong token credentails"})
            else{
                req.user = data;
                next();
            }
        })
    }
}

module.exports = verifyToken;