const express = require ('express');
const router = express.Router();
const movieController=require('../controller/movie.controller');

router.post('/createMovie',movieController.createMovie);
router.get('/getAllMovieList',movieController.getAllMovieList);
router.get('/getSingleMovie',movieController.getSingleMovie);
router.put('/updateMovie',movieController.updateMovie);
router.delete('/deleteMovie',movieController.deleteMovie);

module.exports= router;