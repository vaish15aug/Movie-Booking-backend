const staffService = require('../services/staff.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtHelper = require('../helpers/jwtHelper');



async function loginStaff(req, res) {
    const loginData = req.body;
    console.log(loginData);

    // find staff by email
    console.log("0");
    const checkStaff = await staffService.checkStaff(loginData.email);
    if (!checkStaff) {
        return res.status(404).send({msg:'Invalid email'});
    }
    console.log("1");
    // compare password
    const result = bcrypt.compareSync(loginData.password, checkStaff.password)
    console.log("2");
    //create jwt payload and token
    if (result == true) {

        const payload = _.omit(checkStaff, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);

        await jwtHelper(token, JSON.stringify(payload));
        console.log("3");
        return res.status(200).send({ msg: 'login successfull.', token });
    }
    else{
        return res.status(400).send({msg:'Invalid Password'});
    }
}

module.exports = { loginStaff };