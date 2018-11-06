let express = require('express');
let StudentController = require('../controllers/StudentController');
let UserController = require('../controllers/UserController');

let router = express.Router();

//lista todos los estdiantes
router.get('/students', StudentController.show);
//Busca un estudiante por id
router.get('/students/:id', StudentController.find);
//Crear un estudiante
router.post('/students', StudentController.store);
//Actualizar un estudiante
router.put('/students/:id', StudentController.update);
//Eliminar un estudiante
router.delete('/students/:id', StudentController.destroy);

//Busca un User por id
router.get('/user/:id', UserController.find);
//Crear un User
router.post('/user', UserController.store);

module.exports = router;