const db = require('../models');
const movieModel = db.Movie;
const {Op}= require('sequelize');


// declaring create movie function
const createMovie = async (movieData) => {
    //create new movie record in DataBase
    const movie = await movieModel.create(movieData);

    return movie;
}

//get all movie
async function getAllMovie({ search, language, offset = 0, limit = 10 }) {
    let whereClause = {};
    if (search) {
        whereClause = {
            title: {
                [Op.iLike]: `%${search}%`
            }
        };
    }
    if (language) {
        whereClause.language = language;
    }

    const movies = await db.Movie.findAll({
        where: whereClause,
        offset,
        limit
    });
    const count = await db.Movie.count({ where: whereClause });
    return { count, rows: movies };

}


// find single movie by title
async function getMovieById(id) {

    const movieTitle = await db.Movie.findOne({
        where:
        {
            id: id

        },
        raw: true
    });
    return movieTitle;
}

//update movie

const updateMovie = async (id, updateData) => {
    const movieUpdate = await movieModel.update(updateData, {
        where: { id },
        returning: true
    });

    if (movieUpdate === 0) {
        return null;
    }
}

//delete Movie
const deleteMovie = async (id) => {
    
    const result = await movieModel.destroy({
        where: { id }
    });

    return result > 0;
}
module.exports = { createMovie, getAllMovie, getMovieById, updateMovie ,deleteMovie};
