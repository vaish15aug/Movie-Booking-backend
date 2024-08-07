const db = require('../models');
const staffModel=db.Staff;

  async function checkStaff(email) {
        const checkStaff = await db.Staff.findOne({
            where:
            {
                email: email
    
            },
           raw: true
        });
        return checkStaff;
  }
 const createStaff = async ( staffData) => {
    // create new staff record in DataBase
    const staff = staffModel.create(staffData);
    return staff;
}
    module.exports = { createStaff ,checkStaff};







