const Staff= require('../models');
const theaterService = require('../services/theater.service');
const theaterSchema = require('../schema/theater.schema');
const staffSchema = require('../schema/staff.schema');
const staffService = require('../services/staff.service');
const bcrypt = require('bcrypt');
const Theater= require('../models');
const salt = bcrypt.genSaltSync(10);
const redisHelper = require('../helpers/redisHelper');
const _ = require('underscore');
const jwt = require('../helpers/jwtHelper');



async function theaterRegister(req, res) {
    try {
        const registerData = req.body;
        console.log(registerData);
        console.log("0");
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
        const hash = await bcrypt.hash(registerData.password, salt);
        console.log(hash);
        registerData['password'] = hash;

        // create theater
        console.log("3");
        const created = await theaterService.createTheater(registerData);
        return res.status(201).send({ msg: ' registration successfull' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'theater register failed' })
    }
}
//create staff
async function createStaff(req, res) {
    try {
        const user= res.locals.verify;
        console.log(user)
        const staffData = req.body;
        console.log(staffData);

        console.log("1");
        const { error, value } = staffSchema.staffCreateSchema.validate(staffData);
        if (error) {
            return res.status(422).send(error.message);

        }
        console.log("2");

        if (!user || !user.id) {
            return res.status(400).send({ msg: 'User is not authenticated or does not have an ID.' });
        }
        const hash = await bcrypt.hash(staffData.password, salt);
        console.log(hash);
        staffData['password'] = hash;
        const userId = user.id;
        staffData["createdBy"] = userId;
        console.log("3");
        const createdstaff = await staffService.createStaff(staffData);
        return res.status(201).send({ msg: 'Staff created successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: ' internal server error' });
    }
}
module.exports = { theaterRegister, createStaff }