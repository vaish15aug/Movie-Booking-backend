const AppAdmin=require('../models');
const appAdminSchema = require('../schema/appAdmin.schema');
const appAdminService = require('../services/appAdmin.service');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisHelper = require('../helpers/redisHelper');
const _ = require('underscore');
const jwt = require('../helpers/jwtHelper');


//signUp function
async function signUp(req, res) {
    try {
        const adminData = req.body;
        console.log(adminData);

        //validate request body
        const { error, value } = appAdminSchema.appAdminCreateSchema.validate(adminData)
        if (error) {
            return res.status(400).send(error.message)
        }
        console.log("0");
        //check if email already exist
        const existingAdmin = await appAdminService.checkAdmin(adminData.email)
        if (existingAdmin) {
            return res.status(409).send({ msg: 'Admin with this email already exists.' });
        }
        console.log("1");

        const hash = await bcrypt.hash(adminData.password, salt);
        console.log(hash);
        adminData['password'] = hash;

        console.log("3");
        const createAdmin = await appAdminService.createAdmin(adminData)
        return res.status(201).send({ msg: 'Admin registered successfully.' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "failed to create appAdmin" })
    }
}
//  login function

async function logIn(req, res) {
    const adminLogin = req.body;
    console.log(adminLogin);

    console.log("0");
    //check if Admin exist
    const checkAdmin = await appAdminService.checkAdmin(adminLogin.email);
    if (!checkAdmin) {
        return res.status(404).send({ msg: 'Invalid email' });
    }
    console.log("1");
    //compare password
    const result = bcrypt.compareSync(adminLogin.password, checkAdmin.password)
    console.log(result);

    console.log("2");
    // create jwt payload ad token
    if (result == true) {

        const payload = _.omit(checkAdmin, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);
        
        console.log("3");
        await redisHelper.setValue(token, JSON.stringify(payload));
        
        return res.status(200).send({ msg: 'login successfull.', token });
    }
    else {
        return res.status(400).send({ msg: 'Invalid Password' });
    }
}

//logout function

async function logOut(req, res) {
    try {
        const adminLogout = req.body;
        console.log(adminLogout);

        const token = req.headers.authorization;
        if (!token) {
            return res.status(422).send(error.message)
        }

        await redisService.delData(token);
        return res.status(200).send({ msg: 'logOut Successfull' });
    }
    catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

module.exports = { signUp, logIn, logOut }





