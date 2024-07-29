const AppAdmin=require('../models/appAdmin');
const bcrypt=require('bcrypt');
require('dotenv').config();
const salt = bcrypt.genSaltSync(10);

async function createDefaultAdmin(req, res) {
    const defaultAdmin = req.body;
    console.log(defaultAdmin);
      
    const createDefaultAdmin = async () => {
        const hashedPassword = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, saltRounds);
    }
}