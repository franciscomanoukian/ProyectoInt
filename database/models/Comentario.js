module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.int
        },
        id_post:{
            type: dataTypes.int
        } ,
        id_usuario:{
            type: dataTypes.int
        },
        texto: {
            type: dataTypes.string(400)
        },
        created_at: {
            type: dataTypes.date
        },
        updated_at:{
            type: dataTypes.date
        },
        deleted_at:{
            type: dataTypes
        }
    };
    let conf ={ 
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };
    let comentarios = sequelize.define(alias, cols, conf);
    comentarios.associate = function(models){
        comentarios.belongsTo(models.Producto, {
            as: "id",
            foreignKey: "id_post"
        },
        comentarios.belongsTo(models.Usuario, {
            as : "id",
            foreignKey: "id_usuario"
        })
        );
        
    }
}