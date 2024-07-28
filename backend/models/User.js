const mongoose = require('mongoose');

const UserModel = mongoose.model("user", {
    name: { type: Number },
    password: {type: String },
    email: {type: String },

});

module.export = UserModel;