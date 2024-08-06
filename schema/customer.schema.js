const Joi = require('joi');

const customerCreateSchema = Joi.object({
    isCustomer:Joi.boolean().required(),
    customerName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    password:Joi.string().required()
    
});
const loginSchema=Joi.object({

    email: Joi.string().email().required(),
    password:Joi.string().required()

});
module.exports = { customerCreateSchema,loginSchema };