const jwtHelper = require('../helpers/jwtHelper');
const redisHelper = require('../helpers/redisHelper');

const checkJwt = async (req, res, next) => {
    try {
        const headers = req.headers;
        const auth = headers['authorization'];
        
        if (auth) {
            const token = auth.split(' ')[1];
           
            const gData = await redisHelper.getValue(token);
            if (!gData) {
                return res.status(403).send({ message: 'request forbidden' });

            }
            const user = jwtHelper.verifyToken(token);
            res.locals.verify = user;
            return next();

        }
        else {
            return res.status(401).send({ message: 'No Token Provided' })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Invalid Token' });
    }

}

const isAppAdmin= async(req,res,next)=>{
    try{
        const user=res.locals.verify;
        const isAdmin=user.isAppAdmin;
        if(!isAdmin){
            return res.status(400).send({message:'permission denied'})
        
        }
        else{
            return next();
        }
    }
    catch(err){
        console.log(err);
        return res.status(400).send({message:'permission denied'})

    }

}

const isTheaterAdmin=async(req,res, next)=>{
    try{
        const user=res.locals.verify;
        const isAdmin=user.isAdmin;
        if(!isAdmin){
            return res.status(400).send({message:'permission denied'})
        }
        else{
            return next();
        }
    }
        catch(err){
            console.log(err);
            return res.status(400).send({message:'permission denied'})
        }
    }

module.exports = { checkJwt, isAppAdmin,isTheaterAdmin }
