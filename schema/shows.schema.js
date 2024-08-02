const Joi = require('joi');

showCreateSchema = Joi.object({
    movieId: Joi.integer().required(),
    theaterId: Joi.integer().required(),
    startTime: Joi.time().iso().required,
    endTime: Joi.time().iso().greater(Joi.ref('startTime')).required,
    screen: Joi.string().required(),
    ticketPrice: Joi.number().precision(2).positive().required(),
    showDate: Joi.date().iso().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});

showUpdateSchema = Joi.object({
    startTime: Joi.time().iso().required,
    endTime: Joi.time().iso().greater(Joi.ref('startTime')).required,
    screen: Joi.string().required(),
    ticketPrice: Joi.number().precision(2).positive().required(),
    showDate: Joi.date().iso().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});
const schema = Joi.object({
    shows: Joi.array().items(showSchema).min(1).required()
});
module.exports = { showCreateSchema, schema, showUpdateSchema };