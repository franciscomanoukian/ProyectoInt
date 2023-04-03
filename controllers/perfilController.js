let perfilController = {
    detail: function(req, res){
        return res.render('profile')
    },
    edit: function (req, res) {
        return res.render('profile-edit')
    }
}
module.exports = perfilController