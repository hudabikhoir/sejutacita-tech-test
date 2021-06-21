const userModel = require('../models/users');

module.exports = {
    getAll: function (req, res, next) {
        let usersList = [];

        userModel.find({}, function (err, users) {
            if (err) {
                next(err);
            } else {
                for (let user of users) {
                    usersList.push({
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role_id: user.role_id
                    });
                }
                res.json({
                    response_code: "00",
                    message: "success",
                    data: {
                        users: usersList
                    }
                });
            }
        });
    },

    updateById: function (req, res, next) {
        userModel.findByIdAndUpdate(req.params.userId, {
            name: req.body.name,
            role_id: req.body.role_id
        }, function (err, userInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    response_code: "00",
                    message: "user updated successfully",
                    data: null
                });
            }
        });
    },

    deleteById: function (req, res, next) {
        userModel.findByIdAndRemove(req.params.userId, function (err, userInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    response_code: "00",
                    message: "user deleted successfully",
                    data: null
                });
            }
        });
    },

    create: function (req, res, next) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role_id: req.body.role_id
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    response_code: "00",
                    message: "User added successfully",
                    data: null
                });
        });
    },
}