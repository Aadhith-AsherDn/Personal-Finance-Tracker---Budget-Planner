const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    userPassword: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("login", loginSchema);