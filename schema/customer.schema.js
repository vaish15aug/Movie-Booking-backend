const Joi = require('joi');

const customerCreateSchema = Joi.object({
    id: Joi.number().integer().required(),
    customerName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});
module.exports = { customerCreateSchema };