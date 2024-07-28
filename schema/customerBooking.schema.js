const Joi = required('joi');

const customerBookingSchema = Joi.object({
    id: Joi.number().integer().required(),
    customerId: Joi.number().integer().required(),
    showId: Joi.number().integer().required(),
    ticketCount: Joi.number().integer().required(),
    totalAmount: Joi.number().integer().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

module.exports = { customerBookingSchema };