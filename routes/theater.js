const express = require ('express');
const router = express.Router();
const theaterController=require('../controller/theater.controller');
const authMiddleware= require('../middleware/auth.middleware');


router.post('/theaterRegister',theaterController.theaterRegister);

router.post('/createStaff',authMiddleware.checkJwt,theaterController.createStaff);

module.exports= router;