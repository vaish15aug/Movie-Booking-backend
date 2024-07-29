const db = require('../models');
const showsModel = db.Shows;

    // declaring create shows function
    const createShows = async (showsData) => {

    //create new shows record in DataBase
    const shows = await showsModel.create(showsData);

    return shows;
}
module.exports = { createShows };