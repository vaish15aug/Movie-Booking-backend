const db = require('../models');
const staffModel=db.Staff;


// declaring create staff function
const createStaff = async ( staffData) => {
   
    // create new staff record in DataBase
    const staff = staffModel.create(staffData);
    return staff;
}
    module.exports = { createStaff };







