const db = require('../models');
const theaterModel= db.Theater;


// declaring create theater function
const createTheater = async ( theaterData) => {
   
    //create new theater record in DataBase
    const theater = await theaterModel.create(theaterData);
    return theater;
}
module.exports = { createTheater };
