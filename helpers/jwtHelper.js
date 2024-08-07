const jwt = require('jsonwebtoken');


// Function to generate a JWT token
const generateToken = (payload,expiresIn = '8h') => {
    const secret =process.env.SECRET_KEY;
    return jwt.sign(payload, secret, { expiresIn});
};

// Function to verify a JWT token
const verifyToken = (token) => {
    try{
        const secret=process.env.SECRET_KEY;
        const payload=jwt.verify(token,secret);
        return payload;
    }
    catch(error){
        console.log(error);
        throw Error('invalid token or token expire');
    }
    
};


module.exports = { generateToken, verifyToken };