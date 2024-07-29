const Joi = require('joi');


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

const addressSchema = Joi.object({
    line1: Joi.string().required(),
    line2: Joi.string().optional()
});

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

module.exports = { theaterCreateSchema, addressSchema, combinedSchema };