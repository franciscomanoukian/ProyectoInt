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
            type: dataTypes.STRING(400)

        },
        descripcion: {
            type: dataTypes.STRING
        },
        comentarios: {
            type: dataTypes.INTEGER
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    }
    let config = 0
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