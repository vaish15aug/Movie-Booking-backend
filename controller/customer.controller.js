const Customer = require('../models');
const customerSchema = require('../schema/customer.schema');
const customerService = require('../services/customer.service');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisService= require('redis');

//signUp function
async function signUp(req, res) {
    const customerData = req.body;
    console.log(customerData);

    //validate request body
    const { error, value } = customerSchema.customerCreateSchema.validate(customerData)
    if (error) {
        return res.status(400).send(error.message)
    }
    //check if email already exist
    const existingCustomer = await customerSchema.customerCreateSchema(customerData.email)
    if (existingCustomer) {
        return res.status(409).send({ msg: 'Customer with this email already exists.' });
    }

    // check email and password
    const checkCustomer = await customerService.createCustomer(customerData.email, customerData.password)
    if (!checkCustomer) {
        return res.status(400).send({ msg: ' email and password required.' });
    }

    const hash = bcrypt.hashSync(customerData.password, salt);
    studentData['hashPassword'] = hash
    const createCustomer = await customerSchema.customerCreateSchema(customerData)
    return res.status(201).send({ msg: 'Customer registered successfully.' });

}

//LogIn function
async function logIn(req, res) {
    const customerLogin = req.body;
    console.log(customerLogin);

    //validate request body
    const { error, value } = customerSchema.customerCreateSchema.validate(customerLogin)
    if (error) {
        return res.status(400).send(error.message)
    }

    //check if customer exist
    const checkCustomer = await customerSchema.customerCreateSchema(customerLogin.email);
    if (!checkCustomer) {
        return res.status(404).send({ msg: 'Invalid email' });
    }

    //check email password are provided
    const loginCustomer = await customerService.createCustomer(customerLogin.email, customerLogin.password)
    //validate 
    if (!loginCustomer) {
        return res.status(400).send({ msg: ' email and password required.' });
    }

    //compare password
    const result = bcrypt.compareSync(customerLogin.password, checkCustomer.password)
    // create jwt payload ad token
    if (result == true) {

        const payload = _.omit(checkCustomer, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);

        await redisService.setData(token, JSON.stringify(payload));

        return res.status(200).send({ msg: 'login successfull.', token });
    }

}

// Update profile

async function updateProfile(req, res) {
    const update = req.body;
    const { email } = update;
    console.log(update);
    const updateData = await Customer.findOne({ where: { email } });
    if (!Customer) {
        return res.staus().send({ msg: 'Customer not found' });
    }

    const updateCustomer = await Customer(updateData)
    return res.status(201).send({ msg: 'data update successfully' });

};

//delete Account


module.exports = { signUp, logIn, updateProfile };