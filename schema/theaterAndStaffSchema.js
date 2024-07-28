const Joi = require('joi');
const addressSchema = require('./address.schema');
const theaterSchema = require('./theater.schema');
const staffSchema = require('./staff.schema');

const combinedSchema = Joi.object({
    theater: Joi.object({
        theaterName: Joi.string().required(),
        address: addressSchema.required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required()
    }),
    staff: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required()
    })
})

module.exports = { combinedSchema };