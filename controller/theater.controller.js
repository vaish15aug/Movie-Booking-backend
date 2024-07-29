const theaterService = require('../services/theater.service');
const theaterSchema=require('../schema/theater.schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

async function theaterRegister(req, res) {
    const registerData = req.body;
    console.log(registerData);

     //validate request body
     const { error, value } = theaterSchema.theaterCreateSchema.validate(registerData)
     if (error) {
         return res.status(400).send(error.message)
     }

     //check if email already exist
    const existingTheater = await theaterService.createTheater(registerData.email);
    if (existingTheater) {
        return res.status(409).send({ msg: 'Email already exist.' });
    }
        // check email and password
    const registerTheater = await theaterService.createTheater(registerData.email, registerData.password) 
    if (!registerTheater) {
        return res.status(400).send({ msg: ' email and password required.' });
    }
    
    const hash = bcrypt.hashSync(registerData.password, salt);
    registerData['hashPassword'] = hash
    // create theater
    const registeredData = await theaterService.createTheater(userData)
    return res.status(201).send({ msg: ' registration successfull' });

};
module.exports = { theaterRegister }