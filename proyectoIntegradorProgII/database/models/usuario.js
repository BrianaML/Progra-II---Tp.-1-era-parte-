module.exports = function (sequelize, dataTypes) {
    let alias = "usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primarykey: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        email: {
            allowNull: false,
            unique: true,
            type: dataTypes.STRING(100)
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
        timestamps: true,
        underscored: true
    };

    const Usuario = sequelize.define(alias, cols, config)

    return Usuario;
    
}