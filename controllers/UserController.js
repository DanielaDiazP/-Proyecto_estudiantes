let User = require('../models/User')

let UserController = {
    //buscar un User por id
    find(request, response){
        User.findById({
            _id: request.params.id
        }).then(documents => {
            response.json(documents)
        }).catch(err => {
            response.json(err)
        })
    },

    //Crear User
    store(request, response){
        User.create({
            user_name: request.body.user_name,
            email: request.body.email,
            password:request.body.password
        }).then(documents => {
            response.json(documents)
        }).catch(err => {
            response.json(err)
        })
    }
}

module.exports = UserController;