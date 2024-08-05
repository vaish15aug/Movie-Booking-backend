const DataTypes = require('sequelize');
require('dotenv').config();



const connection = new DataTypes(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {

    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT


});
const db = {};
db.DataTypes = DataTypes;
db.sequelize = connection;


//load the models
db.Customer = require('./customer')(connection, DataTypes)
db.CustomerBooking = require('./customerBooking')(connection, DataTypes)
db.Movie = require('./movie')(connection, DataTypes)
db.Shows = require('./shows')(connection, DataTypes)
db.Staff = require('./staff')(connection, DataTypes)
db.Theater = require('./theater')(connection, DataTypes)
db.AppAdmin = require('./appAdmin')(connection, DataTypes)

db.Customer.sync()
db.CustomerBooking.sync()
db.Movie.sync()
db.Shows.sync()
db.Staff.sync()
db.Theater.sync()
db.AppAdmin.sync()

module.exports = db;