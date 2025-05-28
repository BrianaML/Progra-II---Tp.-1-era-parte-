module.exports = function (sequelize, dataTypes) {
    let alias= "producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        img_producto: {
            type: dataTypes.STRING(255),
            defaultValue: "",
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }

    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    };

    const Producto = sequelize.define(alias, cols, config)

    Producto.associate = function(models) {
        Producto.belongsTo(models.usuario, {
            foreignKey: "usuario_id",
            as: "usuario"
        });

        Producto.hasMany(models.comentario, {
            foreignKey: "producto_id",
            as: "comentarios"
        });
    };

    return Producto;
}