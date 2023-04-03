let productoController = {
    detail: function(req, res){
        return res.render('product')
    },
    edit: function (req, res) {
        return res.render('product-add')
    }
}
module.exports = productoController