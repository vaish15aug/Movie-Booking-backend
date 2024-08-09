const Joi = require('joi');

const customerBookingCreateSchema = Joi.object({
  
    customerId: Joi.number().integer().required(),
    showId: Joi.number().integer().required(),
    ticketCount:Joi.number().integer().required(),
   
    
});


module.exports = { customerBookingCreateSchema };