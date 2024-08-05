const express = require ('express');
const router = express.Router();
const appAdminController= require('../controller/appAdmin.controller');

router.post('/signUp',appAdminController.signUp);

router.post('/logIn',appAdminController.logIn);

router.post('/logOut',appAdminController.logOut);

module.exports= router;