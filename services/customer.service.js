const db = require('../models');
const customerModel = db.Customer;

async function checkCustomer(email) {
    const checkCustomer = await db.Customer.findOne({
        where:
        {
            email: email

        },
        raw: true
    });
    console.log(checkCustomer);
    return checkCustomer;
}

    const createCustomer = async (customerData) => {
     //create new customer record in DataBase
    const customer = await customerModel.create(customerData);

    return customer;
}

//delete customer 
const deleteCustomer = async (id) => {

    const result = await customerModel.destroy({
        where: { id }
    });

    return result > 0;
}
module.exports = { createCustomer,checkCustomer, deleteCustomer };