const Joi = require('joi');

showCreateSchema = Joi.object({
    movieId: Joi.number().integer().required(),
    theaterId: Joi.number().integer().required(),
    startTime: Joi.date().iso().required(),
    endTime: Joi.date().iso().greater(Joi.ref('startTime')).required(),
    screen: Joi.string().required(),
    ticketPrice: Joi.number().precision(2).positive().required(),
    showDate: Joi.date().iso().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});
showUpdateSchema = Joi.object({
    startTime: Joi.date().iso().required(),
    endTime: Joi.date().iso().greater(Joi.ref('startTime')).required(),
    screen: Joi.string().required(),
    ticketPrice: Joi.number().precision(2).positive().required(),
    showDate: Joi.date().iso().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});
const schema = Joi.object({
    shows: Joi.array().items().min(1).required()
});
module.exports = { showCreateSchema, schema, showUpdateSchema };