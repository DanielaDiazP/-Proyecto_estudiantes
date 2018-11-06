let Student = require('../models/Student')

let StudentController = {
    //listar los estudiantes
    show(request, response) {
        Student.find({})
            .then(documents => {
                response.status(200).json(documents)
            }).catch(err => {
                response.json(err)
            })
    },

    //buscar un estudiante por id
    find(request, response){
        Student.findById({
            _id: request.params.id
        }).then(documents => {
            response.json(documents)
        }).catch(err => {
            response.json(err)
        })
    },

    //Crear estudiantes
    store(request, response){
        Student.create({
            name: request.body.name,
            email:request.body.email,
            telefono:request.body.telefono
        }).then(documents => {
            response.json(documents)
        }).catch(err => {
            response.json(err)
        })
    },

    //Actualizar un estudiante
    update(request, response){
        Student.update({
            _id: request.params.id
        }, {
            name: request.body.name,
            email: request.body.email,
            telefono: request.body.telefono
        }).then(documents => {
            response.json(documents)
        }).catch(err => {
            response.json(err)
        })
    },

    //Eliminar un estudiante
    destroy(request, response){
        Student.findByIdAndRemove({
            _id: request.params.id
        }).then(documents => {
            response.json(documents)
        }).catch(err => {
            response.json(err)
        })
    }
}

module.exports = StudentController;