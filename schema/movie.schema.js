const Joi = required('joi');

const movieSchema = Joi.object({
    movieName: Joi.string().min(1).max(255).required(),
    decription: Joi.strinmg().min(1).max(1000).required(),
    releseDate: Joi.number().required(),
    duration: Joi.integer().required(),
    movieImage: Joi.string().optional(),
    createdBy: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});
module.exports = { movieSchema };