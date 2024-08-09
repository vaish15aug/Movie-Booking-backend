const db = require('../models');
const customerBookingService = require('../services/customerBooking.service');
const customerBookingSchema = require('../schema/customerBooking.schema');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisService = require('redis');
const showService = require('../services/shows.service');

async function createBooking(req, res) {
    try {

        const ticketCount = req.body.ticketCount;
        const user = res.locals.verify;
        const userId = user.id;
        const showId = req.params.showId;
        const customerId = user.id;


        console.log("1")
        const show = await db.Shows.findOne({
            where: {
                showId:showId
            },
            attributes: ['movieId', 'theaterId', 'ticketPrice', 'seats']
        });

        const ticketPrice = showId.ticketPrice;
        const seats = showId.seats;

        console.log("3")
        if (seats - ticketCount < 0) {
            return res.status(400).send({ msg: 'seats are not avaliable' });
        }
        const totalAmount = ticketPrice * ticketCount;
        console.log("4")
        const customerBookingData = {
            customerId,
            showId,
            ticketCount,
            totalAmount
        };
        console.log("5")
        const createdCustomerBooking = await customerBookingService.createCustomerBooking(customerBookingData);
        return res.status(201).send({ msg: ' customer created successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: ' internal server error' });
    }
}

module.exports = { createBooking }