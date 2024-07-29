const db = require('../models');
const customerBookingModel = db.Customer;

// declaring create customerBooking function
const createCustomerBooking = async (customerBookingData) => {

    //create new customerBooking record in DataBase
    const customerBooking = await customerBookingModel.create(customerBookingData);

    return customerBooking;
}
module.exports = { createCustomerBooking };