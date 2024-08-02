const CustomerBooking=require('../models');
const customerBookingService=require('../services/customerBooking.service');
const customerBookingSchema=require('../schema/customerBooking.schema');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisService = require('redis');

async function createBooking(req,res){
    const bookingData=req.body;
    console.log(bookingData);


    const { error, value } = customerBookingSchema.customerBookingCreateSchema.validate(bookingData);
    if (error) {
        return res.status(422).send(error.message);

    }
    const user = res.locals.verify;
    const userId = user.id;
    customerData["createdBy"] = userId;
    const createdCustomerBooking = await customerBookingService.customerBookingService(bookingData);
    return res.status(201).send({ msg: ' cust' });
}

module.exports={createBooking}