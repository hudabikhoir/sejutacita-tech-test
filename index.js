const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const users = require('./routes/users');
const profile = require('./routes/profile');
const auth = require('./routes/auth');
var jwt = require('jsonwebtoken');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('secretKey', 'nodeRestApi'); // jwt secret token

app.get('/', function (req, res) {
    res.send(`Yang Fana adalah Waktu<br>
 Yang fana adalah waktu. Kita abadi:<br>
 Memungut detik demi detik,<br>
 Merangkainya seperti bunga<br>
 Sampai pada suatu hari<br>
 Kita lupa untuk apa.<br>
 Tapi, yang fana adalah waktu, bukan?<br>
 Tanyamu.<br>
 Kita abadi.<br>
 -- Sapardi Djoko Damono`);
});

// public route
app.use('/auth', auth);

// private route
app.use('/users', validateUser, users);

app.use('/me', validateUser, profile);

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({
                response_code: "99",
                message: err.message,
                data: null
            });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
}

// express doesn't consider not found 404 as an error so we need to handle 404 it explicitly
// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({
            response_code: "404",
            message: "Not found"
        });
    else
        res.status(500).json({
            response_code: "500",
            message: "Something looks wrong."
        });

});

app.listen(3000, function () {
    console.log('Node server listening on port 3000');
});