const Customer = require('../models/customer');
const customerSchema = require('../schema/customer.schema');

//function to check the user is admin
const isCustomer = (user) => {
    return user && user.role === 'admin';
}
const createCustomer = async (user, customerData) => {
    //check if the user is an admin
    if (!isCustomer(user)) {
        return res.status(401).send({ msg: 'Only for Customer' });
    }

    // validate customer data
    const { error, value } = customerSchema.validate(customerData);
    if (!error) {
        return res.status(400).send(error.message);
    }
    //create customer record
    const customer = await customerSchema.createCustomerSchema(value);
    if (error) {
        return res.status(404).send({ msg: 'Error creating customer account.' });
    }
    return customer;
}
module.exports = { createCustomer };