const db = require('../models');
const movieModel = db.Movie;

    // declaring create movie function
    const createCustomer = async (movieData) => {

    //create new movie record in DataBase
    const movie = await movieModel.create(movieData);

    return movie;
}
module.exports = { createMovie};