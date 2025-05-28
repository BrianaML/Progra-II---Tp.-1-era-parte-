module.exports = function (sequelize, dataTypes) {
    let alias= "comentario";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        texto: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    }
    
    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    };

    const Comentario = sequelize.define(alias, cols, config)

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.usuario, {
            foreignKey: "usuario_id",
            as: "usuario"
        });

        Comentario.belongsTo(models.producto, {
            foreignKey: "producto_id",
            as: "producto"
        });
    };

    return Comentario;
}