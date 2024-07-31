const db = require('../models');
const customerModel = db.Customer;

async function checkCustomer(email) {
    const checkCustomer = await db.Staff.findOne({
        where:
        {
            email: email

        },
        raw: true
    });
    return checkCustomer;
}
    const createCustomer = async (customerData) => {
     //create new customer record in DataBase
    const customer = await customerModel.create(customerData);

    return customer;
}
module.exports = { createCustomer,checkCustomer };