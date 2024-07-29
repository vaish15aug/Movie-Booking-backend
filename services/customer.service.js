const db = require('../models');
const customerModel = db.Customer;

    // declaring create customer function
    const createCustomer = async (customerData) => {

    //create new customer record in DataBase
    const customer = await customerModel.create(customerData);

    return customer;
}
module.exports = { createCustomer };