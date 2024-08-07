const Customer = require('../models');
const customerSchema = require('../schema/customer.schema');
const customerService = require('../services/customer.service');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisHelper = require('../helpers/redisHelper');
const _ = require('underscore');
const jwt = require('../helpers/jwtHelper');



//customer signUp function
async function signUp(req, res) {
    try {
        const customerData = req.body;
        console.log(customerData);

        //validate request body
        const { error, value } = customerSchema.customerCreateSchema.validate(customerData);
        if (error) {
            return res.status(400).send(error.message)
        }
        //check if email already exist
        const existingCustomer = await customerService.checkCustomer(customerData.email);
        if (existingCustomer) {
            return res.status(409).send({ msg: 'Customer with this email already exists.' });
        }

        const hash = await bcrypt.hash(customerData.password, salt);
        console.log(hash);
        customerData['password'] = hash;
        const customerCreated = await customerService.createCustomer(customerData);
        return res.status(201).send({ msg: 'Customer registered successfully.' });

    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Failed to create customer.' });
    }
}


//customer LogIn function
async function logIn(req, res) {
    const customerLogin = req.body;
    console.log(customerLogin);

    console.log("0");
    const checkCustomers = await customerService.checkCustomer(customerLogin.email);
    if (!checkCustomers) {
        return res.status(404).send({ msg: 'Invalid email' });
    }
    console.log("1");
    //compare password
    const result = bcrypt.compareSync(customerLogin.password, checkCustomers.password)

    // create jwt payload ad token
    if (result == true) {

        const payload = _.omit(checkCustomers, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);

        await redisHelper.setValue(token, JSON.stringify(payload));

        console.log("2");
        
        return res.status(200).send({ msg: 'login successfull.', token });
    }
    else {
        return res.status(400).send({ msg: 'Invalid password' });
    }

}

// customer Update profile

async function updateProfile(req, res) {
    const update = req.body;
    const { email } = update;
    console.log(update);
    const updateData = await customerService.checkCustomer({ where: { email } });
    if (!Customer) {
        return res.staus().send({ msg: 'Customer not found' });
    }

    const updateCustomer = await Customer(updateData)
    return res.status(201).send({ msg: ' Customer data update successfully' });

};

//customer delete Account
async function deleteCustomer(req, res) {
    const { id } = req.params;

    const deleted = await customerService.deleteCustomer(id);
    if (!deleted) {
        return res.status(404).send({ msg: 'customer not found' });
    }
    return res.status(200).send({ msg: 'customer deleted successfully' });
}

module.exports = { signUp, logIn, updateProfile, deleteCustomer };