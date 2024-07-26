
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customerName: {

            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customerName: {

            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: timestamps
        },
        updatedAt: {
            type: timestamps
        }

    });
    return Customer;
}
