const theaterService = require('../services/theater.service');
const theaterSchema = require('../schema/theater.schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

async function theaterRegister(req, res) {
    try {
        const registerData = req.body;
        console.log(registerData);

        //validate request body
        const { error, value } = theaterSchema.combinedSchema.validate(registerData)
        if (error) {
            return res.status(400).send(error.message)
        }
        console.log("1")
        //check if email already exist
        const existingTheater = await theaterService.checkTheater(registerData.email);
        if (existingTheater) {
            return res.status(409).send({ msg: 'Email already exist.' });
        }
        
        console.log("2")
        const hash = bcrypt.hash(registerData.password, salt);
        registerData['hashPassword'] = hash
        // create theater
        
        return res.status(201).send({ msg: ' registration successfull' });
    }
    catch (error) {
        return res.status(500).send({ msg: 'theater register failed' })
    }
};
module.exports = { theaterRegister }