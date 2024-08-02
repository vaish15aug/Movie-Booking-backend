const Movie = require('../models');
const movieSchema = require('../schema/movie.schema');
const movieService = require('../services/movie.service');


async function createMovie(req, res) {
    const movieData = req.body;
    console.log(movieData);

    const { error, value } = movieSchema.movieCreateSchema.validate(movieData);
    if (error) {
        return res.status(422).send(error.message);

    }
    const user = res.locals.user;
    const userId = user.id;
    movieData["createdBy"] = userId;
    const createdMovie = await movieService.createMovie(movieData);
    return res.status(201).send({ msg: 'Movie created successfully' });
}

//to get all movie list
async function getAllMovieList(req, res) {
    const { page = 1, pageSize = 10, searchText, language } = req.query;
    const getAllMovieData = req.body
    console.log(getAllMovieData);

    const allMovie = await movieService.getAllMovie({
        search: searchText,
        language: language,
        offset: (page - 1) * pageSize,
        limit: pageSize
    });
    const { count, rows } = allMovie;
    const totalPages = Math.ceil(count / pageSize);

    return res.status(200).send({
        data: rows,
        totalmovies: count,
    });
}

// find single movie

async function getSingleMovie(req, res) {
    const movieTitle = req.body;
    console.log(movieTitle);

    const movie = await movieService.getMovieById(movieTitle);

    //check if movie not found
    if (!movie) {
        return res.status(404).send({ msg: 'Movie not found' });
    }
    return res.status(200).send(movie);
}

//update movie

async function updateMovie(req, res) {
   
   try{
     const { id } = req.params;
    const updateData = req.body;
    console.log(updateData);

    // Validate  data
    const { error,value } = movieSchema.movieUpdateSchema.validate(updateData);
    if (error) {
        return res.status(422).send({ msg: error.message });
    }
    // Call the service to update the movie
    const updatedMovie = await movieService.updateMovie(id, updateData);
    if (!updatedMovie) {
        return res.status(404).send({ msg: 'Movie not found or update failed' });
    }
    return res.status(200).send({ msg: 'Movie updated successfully'});
}
catch(err){
    console.error(err);
    return res.staus(500).send({msg:'An unexpected error occoured'});
}
}

//delete Movie

async function deleteMovie(req,res){
    const {id}=req.params;

    const deleted=await movieService.deleteMovie(id);
    if(!deleted){
        return res.status(404).send({msg:'movie not found'});
    }
    return res.status(200).send({msg:'movie deleted successfully'});
    }



module.exports = { createMovie, getAllMovieList, getSingleMovie,updateMovie,deleteMovie}