const Joi = require('joi');

const showSchema = Joi.object({
    id: Joi.number().integer().required(),
    movieId: Joi.number().integer().required(),
    theaterId: Joi.number().integer().required(),
    startTime: Joi.date().required,
    endTime: Joi.date().required,
    screen: Joi.string().required(),
    createdBy: Joi.string().required(),
    showDate: Joi.date().required(),
    showDay: Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday').required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});
module.exports = { showSchema };