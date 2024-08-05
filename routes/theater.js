const express = require ('express');
const router = express.Router();
const theaterController=require('../controller/theater.controller');

router.post('/theaterRegister',theaterController.theaterRegister);

module.exports= router;