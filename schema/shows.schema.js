const Joi = require('joi');

const showSchema = Joi.object({
    startTime: Joi.date().iso().required(),
    endTime: Joi.date().iso().greater(Joi.ref('startTime')).required(),
    screen: Joi.string().required(),
    ticketPrice: Joi.number().precision(2).positive().required(),
    showDate: Joi.date().iso().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});

const createshowsSchema = Joi.object({
    movieId: Joi.number().integer().required(),
    theaterId: Joi.number().integer().required(),
    shows: Joi.array().items(showSchema).min(1).required()
});

showsUpdateSchema = Joi.object({
    startTime: Joi.date().iso().required(),
    endTime: Joi.date().iso().greater(Joi.ref('startTime')).required(),
    screen: Joi.string().required(),
    ticketPrice: Joi.number().precision(2).positive().required(),
    showDate: Joi.date().iso().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});

module.exports = { createshowsSchema, showsUpdateSchema };