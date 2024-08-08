const express = require ('express');
const router = express.Router();
const showsController= require('../controller/shows.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/createShows',authMiddleware.checkJwt,showsController.createShows);
router.get('/getAllShows',authMiddleware.checkJwt,showsController.getAllShows);
router.get('/getSingleShow/:id',authMiddleware.checkJwt,showsController.getSingleShow);
router.put('/updateShow',showsController.updateShow);
router.delete('/deleteShow',showsController.deleteShow);





module.exports= router;