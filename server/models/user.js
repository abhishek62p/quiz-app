const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/quiz-app");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        minLength: 4,
    },
    firstname: {
        type: String,
        lowercase: true,
        minLength: 4,
    },
    lastname: {
        type: String,
        lowercase: true,
        minLength: 4,
    },
    password: {
        type: String,
        minLength: 4,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}