const db = require('../models');
const customerBookingModel = db.CustomerBooking;


const createCustomerBooking = async (customerBookingData) =>{

        // Create the booking
        const createdBooking = await customerBookingModel.create(customerBookingData);

    return createdBooking;
    }

module.exports = { createCustomerBooking }