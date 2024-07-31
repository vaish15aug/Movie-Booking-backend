const db = require('../models');
const movieModel = db.Movie;

async function getAllMovie() {
    const checkMovie = await db.Movie.findAll({searchText}); 
       
    return checkMovie;

}
    // declaring create movie function
    const createMovie = async (movieData) => {
    //create new movie record in DataBase
    const movie = await movieModel.create(movieData);

    return movie;
}

async function getMovieByTitle(title){

    const movieTitle=await db.Movie.findOne({
    where:
        {
            title:title

        },
        raw:true
    });
    return movieTitle;
}
module.exports = { createMovie,getAllMovie,getMovieByTitle};