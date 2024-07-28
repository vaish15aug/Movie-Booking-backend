const Staff = require('../models/staff');
const staffSchema = require('../schema/staff.schema');

// Function to check if the user is an admin
const isAdmin = (user) => {
    return user && user.role === 'admin';
}
// creating new staff
const createStaff = async (user, staffData) => {
    //check if the user is an admin
    if (!isAdmin(user)) {
        return res.status(401).send({ msg: 'Unauthorized: Only admins can create staff.' });
    }

    //validate staff data
    const { error, value } = staffSchema.validate(staffData);
    if (error) {
        if (!error) {
            return res.status(400).send(error.message);
        }
        //create staff record
        const staff = await staffSchema.create(value);
        if (error) {
            return res.status(404).send({ msg: 'Error creating staff.' });
        }
        return staff;
    }
    module.exports = { createStaff };

}





