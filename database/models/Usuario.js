module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER, 
        },
        email: {
            type: dataTypes.STRING(300),
        }, 
        contraseña: {
            type: dataTypes.STRING(500),
        },
        fotoPerfil: {
            type: dataTypes.STRING,
        }, 
        dni: {
            type: dataTypes.INTEGER,
        }, 
        createdAt: {
            type: dataTypes.DATE
        }, 
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE //chequear esto
        }, 
    };
    let config = { 
    };

    let usuarios = sequelize.define(alias, cols, config);

    usuarios.associate = function(models){
        usuarios.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_usuario" //id_usuario es la fk que esta definida en Comentarios pero vinculando mi tabla 
        })
        usuarios.hasMany(models.Comentario, {
            as: "comentarios", 
            foreignKey: "id_usuario" //id_usuario es la fk que esta definida en Comentarios pero vinculando mi tabla 
        })
    }

    return usuarios;
}

