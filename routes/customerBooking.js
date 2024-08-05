const express = require ('express');
const router = express.Router();
const customerBookingController= require('../controller/customerBooking.controller');

router.post('/createBooking',customerBookingController.createBooking);


module.exports= router;