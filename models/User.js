let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
    user_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    versionKey: false
});

module.exports = moongoose.model('User', UserSchema);