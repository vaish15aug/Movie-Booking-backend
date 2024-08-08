const express = require ('express');
const router = express.Router();
const customerBookingController= require('../controller/customerBooking.controller');
const authMiddleware= require('../middleware/auth.middleware');


router.post('/createBooking/:showId',authMiddleware.checkJwt,customerBookingController.createBooking);


module.exports= router;