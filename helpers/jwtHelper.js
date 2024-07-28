const jwt = require('jsonwebtoken');
const staffController= require('../controller/staff.controller');

// Function to generate a JWT token
const generateToken = (payload, secret, expiresIn = '8h') => {
    return jwt.sign(payload, secret, { expiresIn });
};

// Function to verify a JWT token
const verifyToken = (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
};

module.exports = { generateToken, verifyToken };