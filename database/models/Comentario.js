module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_post:{
            type: dataTypes.INTEGER
        } ,
        id_usuario:{
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }
    };
    let config ={ 
        tableName: 'comentarios',
        
    };
    let comentarios = sequelize.define(alias, cols, config);
    comentarios.associate = function(models){
        comentarios.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "id_post"
        }),
        comentarios.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey: "id_usuario"
        })
        ;
        
    }
    return comentarios
}