const Joi = require('joi');

const customerCreateSchema = Joi.object({
    isCustomer:Joi.boolean().required(),
    customerName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required()
    
});
module.exports = { customerCreateSchema };