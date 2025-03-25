const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 4,
    },
    firstname: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 4,
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 4,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    bookmark: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    profilePicture: {
        type: String,
        default: ""
    },
    quizAttempts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizAttempt'
    }
})

const questionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    options: {
        type: [
            {
                text: { type: String, required: true },
                isCorrect: { type: Boolean, required: true }
            }
        ],
        validate: {
            validator: function(options) {
                return options.length == 4
            },
            message: 'Each question must have exactly 4 options.'
        }
    },
    difficulty: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const quizAttemptSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    totalQuestionAttemted: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 0
    },
    attemptedAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)
const Question = mongoose.model('Question', questionSchema)
const QuizAttempt = mongoose.model('QuizAttempt', quizAttemptSchema)

module.exports = {
    User,
    Question,
    QuizAttempt
}