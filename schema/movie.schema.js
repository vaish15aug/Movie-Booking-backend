const Joi = required('joi');

const movieCreateSchema = Joi.object({
    title: Joi.string().min(1).max(255).required(),
    decription: Joi.string().min(1).max(1000).required(),
    releseDate: Joi.date().iso().required(),
    duration: Joi.integer().required(),
    language:Joi.string().required(),
    movieImage: Joi.string().optional(),
    createdBy: Joi.string().required()
    
});
const movieUpdateSchema = Joi.object({
    title: Joi.string().min(1).max(255).required(),
    releaseDate: Joi.date().iso().required(),
    language: Joi.string().required(),
    duration: Joi.integer().optional(),  
    decription: Joi.string().min(1).max(1000).required()
});
module.exports = { movieCreateSchema ,movieUpdateSchema};