let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let router = require('./routes/index');

app.use(bodyParser.urlencoded({
extended: false
}));
app.use(bodyParser.json());

app.use('/', router);

module.exports = app;