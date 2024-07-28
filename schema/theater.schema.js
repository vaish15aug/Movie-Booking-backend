const Joi = require('joi');
const addressSchema = require('./address.schema');

const theaterCreateSchema = Joi.object({
    id: Joi.number().integer().required(),
    theaterName: Joi.string().required(),
    address: addressSchema.required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()

});


module.exports = { theaterCreateSchema };