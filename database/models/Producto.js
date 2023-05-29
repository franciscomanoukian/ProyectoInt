module.exports = function (sequelize, dataTypes) {
    let alias = "Producto"
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        nombre: {
            type: dataTypes.STRING

        },
        descripcion: {
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        imagen:{
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "productos"
    }
    let Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models){
        Productos.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        }),
        Productos.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: "id_post"
        })
    }

    return Productos
}