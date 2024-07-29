const AppAdmin=require('../models');
const appAdminSchema=require('../schema/appAdmin.schema');
const appAdminService=require('../services/appAdmin.service');
const bcrypt=require('bcrypt');
const dotenv=require('.env')
const salt = bcrypt.genSaltSync(10);
const redisService= require('redis');


//signUp function
async function signUp(req, res) {
    const adminData = req.body;
    console.log(adminData);

    //validate request body
    const { error, value } = appAdminSchema.appAdminCreateSchema.validate(adminData)
    if (error) {
        return res.status(400).send(error.message)
    }
    //check if email already exist
    const existingAdmin = await appAdminSchema.appAdminCreateSchema(adminData.email)
    if (existingAdmin) {
        return res.status(409).send({ msg: 'Admin with this email already exists.' });
    }

    // check email and password
    const checkAdmin = await appAdminService.createAdmin(adminData.email, adminData.password)
    if (!checkAdmin) {
        return res.status(400).send({ msg: ' email and password required.' });
    }

    const hash = bcrypt.hashSync(adminData.password, salt);
    studentData['hashPassword'] = hash
    const createAdmin = await appAdminSchema.appAdminCreateSchema(adminData)
    return res.status(201).send({ msg: 'Admin registered successfully.' });

}
//  login function
 
async function logIn(req, res) {
    const adminLogin = req.body;
    console.log(adminLogin);

    //validate request body
    const { error, value } = appAdminSchema.appAdminCreateSchema.validate(adminLogin)
    if (error) {
        return res.status(400).send(error.message)
    }

    //check if Admin exist
    const checkAdmin = await appAdminSchema.appAdminCreateSchema(adminLogin.email);
    if (!checkAdmin) {
        return res.status(404).send({ msg: 'Invalid email' });
    }

    //check email password are provided
    const loginAdmin = await appAdminService.createAdmin(adminLogin.email, adminLogin.password)
    //validate 
    if (!loginAdmin) {
        return res.status(400).send({ msg: ' email and password required.' });
    }

    //compare password
    const result = bcrypt.compareSync(adminLogin.password, checkAdmin.password)
    // create jwt payload ad token
    if (result == true) {

        const payload = _.omit(checkAdmin, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);

        await redisService.setData(token, JSON.stringify(payload));

        return res.status(200).send({ msg: 'login successfull.', token });
    }

}

//logout function




module.exports={signUp,logIn,logOut}





