const DataTypes= require('sequelize');
require('dotenv').config();

 const Customer=require('./customer');
 const CustomerBooking=require('./customerBooking');
 const Movie=require('./movie');
 const Shows=require('./shows');
 const Staff=require('./staff');
 const Theater=require('./theater');

 module.exports = {
    Customer,
    CustomerBooking,
    Movie,
    Shows,
    Theater,
    Staff
};