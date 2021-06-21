const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    register: function (req, res, next) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            role_id: 2,
            password: req.body.password
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    response_code: "00",
                    message: "success",
                    data: null
                });
        });
    },
    login: function (req, res, next) {
        userModel.findOne({
            email: req.body.email
        }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({
                        id: userInfo._id
                    }, req.app.get('secretKey'), {
                        expiresIn: '1h'
                    });
                    res.json({
                        response_code: "00",
                        message: "success",
                        data: {
                            user: userInfo,
                            token: token
                        }
                    });
                } else {
                    res.json({
                        response_code: "99",
                        message: "Invalid email or password. Please check again!",
                        data: null
                    });
                }
            }
        });
    },
}