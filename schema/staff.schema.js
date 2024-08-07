const Joi = require('joi');

const staffCreateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password:Joi.string().required(),
    phone: Joi.string().required(),
    isActive: Joi.string().required(),
    isAdmin:Joi.string().required(),
    staffRole:Joi.string().required()
});

const loginSchema=Joi.object({

    email: Joi.string().email().required(),
    password:Joi.string().required()

});
module.exports = { staffCreateSchema ,loginSchema};