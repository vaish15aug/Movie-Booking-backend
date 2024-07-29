const jwt=require("jsonwebtoken");
const AppAdmin=require('../models/appAdmin');


async function verifyToken(req,res,next) => {
    const token = req.body;
    console.log(token);

    if(!token){
        return res.status(403).send({msg:'no token provided'});
    }
}
 jwt.verify(token,config.secret,(error,decoded)=>{
    if (error){
        return res.status(401).send({msg:'Unauthorized'});
    }
    req.
 });
