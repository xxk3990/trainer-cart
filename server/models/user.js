'use strict';
const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            autoIncrementIdentity: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        dob: DataTypes.STRING,
        user_role: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        underscored: true
    }, );
    return User;
}

module.exports = {
    userModel
}