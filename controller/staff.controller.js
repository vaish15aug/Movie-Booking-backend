const staffService = require('../services/staff.service');
const staffSchema = require('../schema/staff.schema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const jwtHelper = require('../helpers/jwtHelper');

async function loginStaff(req, res) {
    const loginData = req.body;
    console.log(loginData);

    //validate request body
    const { error, value } = staffSchema.staffCreateSchema.validate(loginData)
    if (error) {
        return res.status(400).send(error.message)
    }

    //check email password are provided
    const staffLogin = await staffService.createStaff(loginData.email, loginData.password)
    //validate 
    if (!staffLogin) {
        return res.status(400).send({ msg: ' email and password required.' });
    }

    // find staff by email
    const staff = await staffService.findOne({ email });
    if (!staff) {
        return { status: 401, message: 'Invalid email.' };
    }
    // compare password
    const result = bcrypt.compareSync(loginData.password, checkStaff.password, salt)

    //create jwt payload and token
    if (result == true) {

        const payload = _.omit(checkStaff, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);

        await jwtHelper(token, JSON.stringify(payload));

        return res.status(200).send({ msg: 'login successfull.', token });
    }
}
module.exports = { loginStaff };