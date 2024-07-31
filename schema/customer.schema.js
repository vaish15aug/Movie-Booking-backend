const Joi = require('joi');

const customerCreateSchema = Joi.object({
    
    customerName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required()
    
});
module.exports = { customerCreateSchema };