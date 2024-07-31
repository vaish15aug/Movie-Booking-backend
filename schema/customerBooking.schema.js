const Joi = required('joi');

const customerBookingSchema = Joi.object({
    
    customerId: Joi.number().integer().required(),
    showId: Joi.number().integer().required(),
    ticketCount: Joi.number().integer().required(),
    totalAmount: Joi.number().integer().required()
    
});

module.exports = { customerBookingSchema };