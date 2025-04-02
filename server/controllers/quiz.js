const { Question, Quizzes } = require('../models/model')

const createQuizzes = async (req, res) => {
    const userId = req.user.userId
    const { title, description, questions } = req.body
    if(!userId || !title) {
        return res.status(404).json({ msg: 'Userid and title are required'})
    }

    let questionIds = []
    console.log('hi2');
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
    const { questionId } = req.body

    try {
        const quiz = await Quizzes.findById(quizId)
        if(!quiz) return res.status(404).json({
            msg: 'Quizzes not found'
        })

        const validQuestions = await Question.find({ _id: { $in: questionId } })
        const validQuestionId = validQuestions.map(q => q._id.toString())

        if(validQuestionId.length !== questionId.length) {
            return res.status(400).json({
                msg: 'some question ids are invalid'
            })
        }
        quiz.questions = [...new set([...quiz.questions, ...validQuestionId])]
        await quiz.save()
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

module.exports = {
    createQuizzes,
    updateQuizzes,
    getQuizQues,
}