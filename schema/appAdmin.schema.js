const Joi = require('joi');

const appAdminCreateSchema = Joi.object({
    id: Joi.number().integer().required(),
    userName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    lastLogin: Joi.date().required(),
    isActive: Joi.boolean().required()
});
module.exports = { appAdminCreateSchema };