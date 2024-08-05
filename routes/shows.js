const express = require ('express');
const router = express.Router();
const showsController= require('../controller/shows.controller');

router.post('/createShows',showsController.createShows);
router.get('/getAllShows',showsController.getAllShows);
router.get('/getSingleShow',showsController.getSingleShow);
router.put('/updateShow',showsController.updateShow);
router.delete('/deleteShow',showsController.deleteShow);



module.exports= router;