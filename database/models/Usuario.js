module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER, 
        },
        email: {
            type: dataTypes.STRING
        }, 
        contraseña: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING
        }, 
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
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
        tableName: 'usuarios'
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

