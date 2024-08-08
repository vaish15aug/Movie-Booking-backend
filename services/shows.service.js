const db = require('../models');
const showsModel = db.Shows;


const createShows = async (showsData, userId) => {
    const shows = showsData.shows;
    const movieId = showsData.movieId;
    const theaterId = showsData.theaterId;
    console.log('starting to process shows data');

    for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        show["createdBy"] = userId;
        show["movieId"] = movieId;
        show["theaterId"] = theaterId;

        console.log(`processing show ${i + 1}:`, show);

        const created = await showsModel.create(show);
    }

    console.log('Finished processing shows data.');


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

        where: { showId: id },
        raw: true

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