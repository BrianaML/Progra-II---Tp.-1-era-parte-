module.exports = function (sequelize, dataTypes) {
    let alias = "usuario";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        email: {
            allowNull: false,
            unique: true,
            type: dataTypes.STRING(100)
        },
        usuario: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        contrasenia: {
            allowNull: false,
            type: dataTypes.STRING(255)
        },
        fecha_nacimiento: {
            allowNull: false,
            type: dataTypes.DATEONLY
        },
        dni: {
            allowNull: false,
            unique: true,
            type: dataTypes.INTEGER
        },
        foto_perfil: {
            type: dataTypes.STRING(255),
            defaultValue: "",
        }
    
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };

    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = function(models) {
        Usuario.hasMany(models.producto, {
            foreignKey: "usuario_id",
            as: "productos"
        });

        Usuario.hasMany(models.comentario, {
            foreignKey: "usuario_id",
            as: "comentarios"
        });
    };

    return Usuario;
}