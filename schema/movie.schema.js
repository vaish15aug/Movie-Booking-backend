const Joi = require('joi');

const movieCreateSchema = Joi.object({
    
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(1000).required(),
    releseDate: Joi.date().iso().required(),
    duration: Joi.number().integer().min(1).required(),
    language:Joi.string().required(),
    movieImage: Joi.string().optional(),
    createdBy: Joi.string().required()
    
});
const movieUpdateSchema = Joi.object({
    title: Joi.string().min(1).max(255).required(),
    releaseDate: Joi.date().iso().required(),
    language: Joi.string().required(),
    duration: Joi.number().integer().min(1).optional(),  
    description: Joi.string().min(1).max(1000).required()
});
module.exports = { movieCreateSchema ,movieUpdateSchema};