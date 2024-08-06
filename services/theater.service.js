const db = require('../models');
const theaterModel= db.Theater;
const {Op}=require ('sequelize');

async function checkTheater(email) {
    const checkTheater = await db.Theater.findOne({
        where:
        {
            email:email

        },
        raw: true
    });
    return checkTheater;
}

// declaring create theater function
const createTheater = async ( theaterData) => {
   
    //create new theater record in DataBase
    const theater = await theaterModel.create(theaterData);
    return theater;
}

const getAllTheater=async(queryParams)=>{
     const city=queryParams.city;
     const state= queryParams.state;
     const limit= queryParams.limit;
     const offset=queryParams.offset;
     const whereClause= {
        [Op.and] : [{city:city},{state:state}]
     }
    const theaterList = await theaterModel.find({
        where:whereClause,
        limit,
        offset,
        attributes:[
            id,
            theaterName
        ]
    })
    const count =await db.Theater.count({where:whereClause});
     return {theaterList,count};
}
module.exports = { createTheater,getAllTheater,checkTheater };
