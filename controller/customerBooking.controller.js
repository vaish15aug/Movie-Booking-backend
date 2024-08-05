const CustomerBooking = require('../models');
const customerBookingService = require('../services/customerBooking.service');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const redisService = require('redis');
const showService = require('../services/shows.service');

async function createBooking(req, res) {
    try {

        const ticketCount = req.body.ticketCount;
        const user = res.locals.verify;
        const userId = user.id;
        const showId = req.params;
        customerId = user.id;

        const show = await db.Shows.findOne({
            where: {
                showId: showId
            },
            attributes: ['movieId', 'theaterId', 'ticketPrice', 'seats']
        });

        const ticketPrice = show.ticketPrice;
        const seats = show.seats;

        if (seats - ticketCount < 0) {
            return res.status(400).send({ msg: 'seats are not avaliable' });
        }
        const totalAmount = ticketPrice * ticketCount;

        const customerBookingData = {
            customerId,
            showId,
            ticketCount,
            totalAmount
        };

        const createdCustomerBooking = await customerBookingService.createCustomerBooking(bookingData);
        return res.status(201).send({ msg: ' customer created successfully' });
    }
    catch (err) {
        console.error(err);
        return res.staus(500).send({ msg: 'An unexpected error occoured' });
    }
}

module.exports = { createBooking }