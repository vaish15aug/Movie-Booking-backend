const Joi = require('joi');

const appAdminCreateSchema = Joi.object({
    
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    lastLogin: Joi.date().required(),
    isActive: Joi.boolean().required(),
    
});
const adminLoginSchema=Joi.object({

    email: Joi.string().required(),
    password:Joi.string().required()

});
module.exports = { appAdminCreateSchema,adminLoginSchema };