const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", LoginSchema);
module.exports = LoginSchema;