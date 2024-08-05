const Joi = required('joi');

const customerBookingCreateSchema = Joi.object({
  
    customerId: Joi.integer().required(),
    showId: Joi.integer().required(),
    ticketCount: Joi.integer().required(),
    
});


module.exports = { customerBookingCreateSchema };