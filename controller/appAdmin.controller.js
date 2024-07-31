
const appAdminSchema = require('../schema/appAdmin.schema');
const appAdminService = require('../services/appAdmin.service');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisService = require('redis');


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
    const existingAdmin = await appAdminService.createAdmin(adminData.email)
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
    const createAdmin = await appAdminService.createAdmin(adminData)
    return res.status(201).send({ msg: 'Admin registered successfully.' });

}
//  login function

async function logIn(req, res) {
    const adminLogin = req.body;
    console.log(adminLogin);

    //check if Admin exist
    const checkAdmin = await appAdminService.checkAdmin(adminLogin.email);
    if (!checkAdmin) {
        return res.status(404).send({ msg: 'Invalid email' });
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
    else{
        return res.status(400).send({msg:'Invalid Password'});
    }
}

//logout function

async function logOut(req, res) {
    const adminLogout = req.body;
    console.log(adminLogout);

    const token = req.headers.authorization;
    if (!token) {
        return res.status(422).send(error.message)
    }

    await redisService.delData(token);
    return res.status(200).send({ msg: 'logOut Successfull' });
}



module.exports = { signUp, logIn, logOut }





