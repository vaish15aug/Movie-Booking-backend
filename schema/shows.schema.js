const Joi = require('joi');

const showSchema = Joi.object({
    movieId: Joi.integer().required(),
    theaterId: Joi.integer().required(),
    startTime: Joi.time().required,
    endTime: Joi.time().required,
    screen: Joi.string().required(),
    createdBy: Joi.string().required(),
    showDate: Joi.date().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required()
});
module.exports = { showSchema };