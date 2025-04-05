const { Question, Quizzes } = require('../models/model')

const createQuizzes = async (req, res) => {
    const userId = req.user.userId
    const { title, description, questions } = req.body
    if(!userId || !title) {
        return res.status(404).json({ msg: 'Userid and title are required'})
    }

    let questionIds = []
    try {
        if(questions && questions.length > 0) {
            const createQuesWithId = questions.map(q => ({
                ...q,
                user: userId
            }))
            const createQuestions = await Question.insertMany(createQuesWithId)
            questionIds = createQuestions.map(q => q._id)
            console.log(createQuestions);
        }
    
        const newQuiz = new Quizzes({
            title: title,
            description: description,
            createdBy: userId,
            questions: questionIds
        })
        
        await newQuiz.save()
        console.log('quiz created successfully',newQuiz);
        return res.status(201).json({
            msg: 'Quiz created successfully with questions',
            quiz: newQuiz
        })
    } catch(error) {
        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

const updateQuizzes = async (req, res) => {
    const { quizId } = req.params
    const { questions } = req.body
    const userId = req.user.userId

    try {
        const quiz = await Quizzes.findOne(
            { _id: quizId, createdBy: userId }
        )
        if(!quiz) return res.status(404).json({
            msg: 'Quizzes not found'
        })

        const validQuestions = await Question.find({ _id: { $in: questions } })
        const validQuestionId = validQuestions.map(q => q._id.toString())

        if(validQuestionId.length !== questions.length) {
            return res.status(400).json({
                msg: 'some question ids are invalid'
            })
        }
        console.log(quiz.questions);
        quiz.questions = [...new Set([...(quiz.questions || []), ...(validQuestionId || [])])]
        await quiz.save()

        res.status(202).json({
            msg: 'Quiz updated successfully',
            quiz
        })
    } catch(error) {
        return res.status(500).json({
            msg: 'Internal server error can not create the quizzes',
            error: error.message,
            error: error.name
        })
    }
}

const getQuizQues = async (req, res) => {
    const { quizId } = req.params
    console.log(quizId);
    try {
        const quiz = await Quizzes.findById(quizId).populate('questions')
        if(!quiz) {
            return res.status(404).json({
                msg: 'Quiz not found'
            })
        }
        res.status(200).json({
            msg: 'Quiz retrived successfully',
            quiz: quiz
        })
    } catch(error) {
        return res.status(501).json({
            msg: 'Internal server error',
            error: error.message,
            error: error.name
        })
    }
}

const getQuiz = async (req, res) => {
    try {
        const quiz = await Quizzes.find()
        if(!quiz) {
            return res.status(404).json({
                msg: 'Quiz not found'
            })
        }
        res.status(200).json({
            msg: 'Quiz retrived successfully',
            quiz: quiz
        })
    } catch(error) {
        return res.status(501).json({
            msg: 'Internal server error',
            error: error.message,
            error: error.name
        })
    }
}

const removeQues = async (req, res) => {
    const { quizId, quesId } = req.body
    try {
        const updateQuiz = await Quizzes.findByIdAndUpdate(
            { _id: quizId},
            { $pull: { questions: quesId } },
            { new: true }
        )
        if(!updateQuiz) {
            return res.status(404).json({
                msg: 'Quiz not found'
            })
        }

        res.status(202).json({
            msg: 'Question removed successfully',
            updateQuiz
        })
    } catch(error) {
        return res.status(500).json({
            msg: 'Internal Error cannot remove questions',
            error: error.message
        })
    }
}

const deleteQuiz = async (req, res) => {
    const { quizId } = req.params
    const userId = req.user.userId
    try {
        const deletedQuizz = await Quizzes.findOneAndDelete(
            { _id: quizId, createdBy: userId}
        )
        if(deletedQuizz) {
            return res.status(401).json({
                msg: 'Error while deleting quizz this userId',
                userId: userId
            })
        }
        
        res.status(202).json({
            msg: 'Quiz deleted successfully',
            deletedQuiz: deletedQuizz
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error',
            error: error.message
        })
    }
}

module.exports = {
    createQuizzes,
    updateQuizzes,
    getQuizQues,
    getQuiz,
    removeQues,
    deleteQuiz,
}