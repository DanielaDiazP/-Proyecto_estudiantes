let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let StudentSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    }
}, {
    versionKey: false
});

module.exports = moongoose.model('Student', StudentSchema);