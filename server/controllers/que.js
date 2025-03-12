const { Question } = require("../models/user");

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

module.exports = {
    createQue
}