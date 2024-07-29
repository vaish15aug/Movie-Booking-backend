
const db = require('../models');
const appAdminModel = db.AppAdmin;

// declaring create admin function
const createAdmin = async (adminData) => {

    //create new admin record in DataBase
    const admin = await appAdminModel.create(adminData);

    return admin;
}
module.exports = { createAdmin };