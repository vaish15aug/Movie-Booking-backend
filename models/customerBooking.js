module.exports = (sequelize, DataTypes) => {
    const CustomerBooking = sequelize.define('customerBooking', {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        showId: {
            type: DataTypes.INTEGER,
            allowNull: false         
        },
        ticketCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }

        });
    return CustomerBooking;
}


