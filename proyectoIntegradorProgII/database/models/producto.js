module.exports = function (sequelize, dataTypes) {
    let alias= "producto";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        img_producto: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }

    let config = {
        tableName: "productos",
        timestamps: true,
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