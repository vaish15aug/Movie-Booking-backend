const Joi = require('joi');

const staffCreateSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});
module.exports = { staffCreateSchema };