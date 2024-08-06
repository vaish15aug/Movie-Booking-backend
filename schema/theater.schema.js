const Joi = require('joi');

const addressSchema = Joi.object({
    line1: Joi.string().required(),
    line2: Joi.string().optional()
});

const combinedSchema = Joi.object({
    theaterName: Joi.string().required(),
    address: addressSchema.required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    country: Joi.string().required()
})

module.exports = { addressSchema, combinedSchema };