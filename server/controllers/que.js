const { object } = require("zod");
const { Question } = require("../models/model");

const createQue = async (req, res) => {
    const userId = req.user.userId;
    if (!userId) {
        return res.status(400).json({ msg: "UserId is required" });
    }

    const { questionText, options, difficulty, category } = req.body;
    try {
        const newQue = new Question({
            user: userId,
            questionText,
            options,
            difficulty,
            category
        })
        await newQue.save()
        res.status(201).json({
            msg: 'Question created successfully,',
            que: newQue
        })
        console.log(newQue);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error while creating question',
            error: error.message
        })
    }
}

const getQues = async (req, res) => {
    try {
        const gettingQues = await Question.find();
        if (!gettingQues) return res.status(204).json({ msg: "Question NOT-FOUND" })

        res.status(202).json({
            msg: 'Getting all ques',
            que: gettingQues
        })
        console.log(gettingQues);
    } catch (error) {
        return res.status(500).json({
            msg: 'Error fetching while getting ques',
            error: error.name
        })
    }
}

const updateQue = async (req, res) => {
    const { questionText, options, difficulty, category } = req.body
    const userId = req.user.userId

    try {
        const updatedQuestion = await Question.findOneAndUpdate(
            { user: userId },
            { questionText, options, difficulty, category },
            { new: true, runValidators: true }
        )

        if (!updatedQuestion) {
            return res.status(404).json({
                msg: 'Question not found or unauthorized'
            })
        }
        res.status(200).json({
            msg: 'Question updated successfully',
            updatedQuestion: updatedQuestion
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'server error',
            errorName: error.name,
            errorMsg: error.message
        })
    }
}

const deleteQues = async (req, res) => {
    const { quesid } = req.params
    const userid = req.user.userId   // getting id from headers

    if (!quesid || !userid) {
        return res.status(404).json({
            msg: 'User Id or Question Id is missing'
        })
    }

    try {
        const question = await Question.findById({ _id: quesid })

        if(!question) {
            return res.status(404).json({
                msg: 'Question not found'
            })
        }

        console.log(question.user, typeof(question.user.toString()));
        if(question.user.toString() !== userid) {
            return res.status(401).json({
                msg: 'User is Unauthorized cannot delete the Question'
            })
        }

        const deletedQue = await Question.findOneAndDelete({ _id: quesid })

        res.status(202).json({
            msg: 'Question deleted successfully',
            deletedQue: deletedQue
        })
    } catch(error) {
        return res.status(501).json({
            msg: 'An Internal server error',
            error: error.message,
            error: error
        })
    }

}

module.exports = {
    createQue,
    updateQue,
    deleteQues,
    getQues
}