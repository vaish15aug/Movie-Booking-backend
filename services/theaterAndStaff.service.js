const Staff = require('../models/staff');
const Theater = require('../models/theater');
const staffSchema = require('../schema/staff.schema');
const theaterSchema = require('../schema/theater.schema');
const theaterAndStaffSchema = require('../schema/theaterAndStaffSchema');

//function to check if user is an admin
const isAdmin = (user) => {
    return user && user.role === 'admin';
}

// creating new theater
const createTheater = async (user, theaterData) => {
    //check if the user is an admin
    if (!isAdmin(user)) {
        return res.status(401).send({ msg: 'Unauthorized: Only admins can create theater.' });
    }

    // validate theater data
    const { error, value } = theaterSchema.validate(theaterData);
    if (!error) {
        return res.status(400).send(error.message);
    }
    //create theater record
    const theater = await theaterSchema.create(value);
    if (error) {
        return res.status(404).send({ msg: 'Error creating theater.' });
    }
    return theater;
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
    };
    module.exports = { createTheater, createStaff };

}

