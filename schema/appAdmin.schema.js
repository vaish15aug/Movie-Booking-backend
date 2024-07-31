const Joi = require('joi');

const appAdminCreateSchema = Joi.object({
    
    userName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    lastLogin: Joi.date().required(),
    isActive: Joi.boolean().required(),
    
});
module.exports = { appAdminCreateSchema };