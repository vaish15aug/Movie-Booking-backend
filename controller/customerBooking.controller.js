const CustomerBooking=require('../models');
const customerBookingService=require('../services/customerBooking.service');
const customerBookingSchema=require('../schema/customerBooking.schema');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisService = require('redis');

async function createBooking(req,res){
    const bookingData=req.body;
    console.log(bookingData);

const {error}= customerBookingSchema.createCustomerBooking.validate(bookingData);
if(error){
    return res.status(400).send(error.message);

}
const createdBooking=customerBookingService.
}

module.exports={createBooking}