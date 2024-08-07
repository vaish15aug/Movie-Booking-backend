
const db = require('../models');
const appAdminModel = db.AppAdmin;

async function checkAdmin(email) {
    const checkAdmin = await db.AppAdmin.findOne({
        where:
        {
            email: email

        },
       raw: true
    });
    console.log(checkAdmin);
    return checkAdmin;
}
const createAdmin = async (adminData) => {

    //create new admin record in DataBase
    const admin = await appAdminModel.create(adminData);

    return admin;
}
module.exports = { createAdmin,checkAdmin };