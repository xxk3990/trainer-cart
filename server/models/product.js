'use strict';
const productModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            autoIncrementIdentity: true
        },
        product_name: DataTypes.STRING,
        image_key: DataTypes.STRING,
        price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
            tableName: "products",
            underscored: true
        }
    )
    return Product;
}

module.exports = {productModel}