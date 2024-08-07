const express = require ('express');
const router = express.Router();
const movieController=require('../controller/movie.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/createMovie', authMiddleware.checkJwt,movieController.createMovie);
router.get('/getAllMovieList',authMiddleware.checkJwt,movieController.getAllMovieList);
router.get('/getSingleMovie',movieController.getSingleMovie);
router.put('/updateMovie',movieController.updateMovie);
router.delete('/deleteMovie',movieController.deleteMovie);

module.exports= router;