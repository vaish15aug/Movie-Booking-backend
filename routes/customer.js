const express = require ('express');
const router = express.Router();
const customerController= require('../controller/customer.controller');

router.post('/signUp',customerController.signUp);

router.post('/logIn',customerController.logIn);

module.exports= router;