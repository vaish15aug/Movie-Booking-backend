const express = require ('express');
const router = express.Router();
const staffController= require('../controller/staff.controller');


router.post('/loginStaff',staffController.loginStaff);

module.exports= router;