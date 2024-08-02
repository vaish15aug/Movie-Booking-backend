const Joi = required('joi');

const customerBookingCreateSchema = Joi.object({
    id:Joi.integer().required(),
    customerId: Joi.integer().required(),
    showId: Joi.integer().required(),
    ticketCount: Joi.integer().required(),
    
});


module.exports = { customerBookingCreateSchema };