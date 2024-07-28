const Joi=require('joi');

const addressSchema=Joi.object({
    line1:Joi.string().required(),
    line2:Joi.string().optional()
});
module.exports=addressSchema;