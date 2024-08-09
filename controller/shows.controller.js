
const showsService = require('../services/shows.service');
const showsSchema = require('../schema/shows.schema');
const theaterService = require('../services/theater.service');


async function createShows(req, res) {
    try {

        const showsData = req.body;
        console.log(showsData);
        console.log("0");
        const { error, value } = showsSchema.createshowsSchema.validate(showsData);
        if (error) {
            return res.status(422).send(error.message);
        }
        console.log("1");
        const user = res.locals.verify;
        console.log(user);
        const userId = user.id;



        console.log("2");
        const showCreated = await showsService.createShows(showsData, userId)
        return res.status(201).send({ msg: 'Shows created successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: ' internal server error' });
    }
}



// get all shows
async function getAllShows(req, res) {
    const { showDate, page = 1, pageSize = 10, sort = 'ASC', city, state, movieId } = req.query;
    
    try {
        const theaterData = await theaterService.getAllTheater({
            city: city,
            state: state,
            limit: pageSize,
            offset: (page - 1) * pageSize
        })

        const theaterList = theaterData.theaterList;
        const count = theaterData.count;
        for (let i = 0; i < theaterList.length; i++) {
            const theater = theaterList[i];
            const theaterId = theater.id;

            const allShows = await showsService.getAllShows({
                theaterId: theaterId,
                showDate: showDate,
                movieId: movieId,

            });
            theater["shows"] = allShows;
            console.log(theater)
        }

        return res.status(200).send({
            data: theaterList,
            totalShows: count,
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ msg: ' internal server error' });
    }
}
//get single show

async function getSingleShow(req, res) {
    const id = req.params.id;
    try {
        const show = await showsService.getShowById(id);
        console.log(show);
        if (!show) {
            return res.status(404).send({ msg: 'show not found' });
        }
        return res.status(200).send(show);
    }

    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }
}
// update show

async function updateShow(req, res) {
    const id = req.params.id;
    const updateData = req.body;

    try {
        // Validate  data
        const { error, value } = showsSchema.showsUpdateSchema.validate(updateData);
        if (error) {
            return res.status(422).send({ msg: error.message });
        }
        // Call the service to update the movie
        const updatedShow = await showsService.updateShow(id, updateData);
        if (!updatedShow) {
            return res.status(404).send({ msg: 'show not found or update failed' });
        }
        return res.status(200).send({ msg: 'show updated successfully' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ msg: ' internal server error' });
    }
}

// delete show
async function deleteShow(req, res) {
    const id = req.params.id;
    try {
        const deleted = await showsService.deleteShow(id);
        if (!deleted) {
            return res.status(404).send({ msg: 'Show not found' });
        }
        return res.status(200).send({ msg: 'Show deleted successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }
}

module.exports = { createShows, getAllShows, getSingleShow, updateShow, deleteShow }



