module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define('staff', {

        TheaterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
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
        staffRole: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: timestamps
        },
        updatedAt: {
            type: timestamps
        }

    });
    return Staff;
}