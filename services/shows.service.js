const db = require('../models');
const showsModel = db.Shows;


const createShows = async (showsData, userId) => {
    const created = [];

    console.log('starting to process shows data');

    for (let i = 0; i < showsData.length; i++) {
        const show = showsData[i];
        show["createdBy"] = userId;
        console.log(`processing show ${i + 1}:`, show);
        const created = await showsModel.create(show);
        console.log(`Successfully created show ${i + 1}:`, created);
        created.push(created);
    }

    console.log('Finished processing shows data.');
    console.log('Created shows:', created);


    return createShows;
};


//get all shows

async function getAllShows({ showDate, theaterId, movieId }) {
    let whereClause = {
        [Op.and]: [{ theterId: theaterId }, { movieId: movieId }],
        [Op.eq]: [{ showDate: new Date(showDate) }]
    };

    const shows = await db.Shows.findAll({
        where: whereClause,

        attributes: [
            'id',
            'startTime',
            'endTime',
            'ticketPrice',
            'showDate',
            'screen'
            
        ],

    });

    return shows

};


//get one Show


async function getShowById(id) {
    const show = await db.Shows.findOne({

        where: { id: id },

    });

    return show;
}
//update show 

const updateShow = async (id, updateData) => {
    const showUpdate = await showsModel.update(updateData, {
        where: {
            id: id

        },
        returning: true
    });

    if (showUpdate === 0) {
        return null;
    }
}

//delete show
const deleteShow = async (id) => {

    const result = await showsModel.destroy({
        where: { id }
    });

    return result > 0;
}
module.exports = { createShows, getAllShows, getShowById, updateShow, deleteShow };