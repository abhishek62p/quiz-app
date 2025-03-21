const { User, Question } = require("../models/model");

const addBookmark = async (req, res) => {
    const userId = req.user.userId;
    const { quesid } = req.params;

    try {
        const findQues = await Question.findById({ _id: quesid })
        if(!findQues) {
            return res.status(404).json({
                msg: 'Question not found'
            })
        }
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({
                msg: 'User is not found' 
            })
        }
        console.log(quesid);
        if(user.bookmark.includes(quesid)) {
            return res.status(400).json({
                msg: 'Question already bookmarked'
            })
        }
        user.bookmark.push(quesid);
        await user.save()

        res.status(202).json({
            msg: 'Bookmark added successfully',
            bookmarks: user.bookmark
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error',
            error: error.message,
            error: error
        })
    }
}

const removeBookmark = async (req, res) => {
    const userId = req.user.userId;
    const { quesid } = req.params;

    try {
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        if(!user.bookmark.includes(quesid)){
            return res.status(400).json({
                msg: 'Question is not bookmarked'
            })
        }
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { bookmark: quesid } },  // Removes the matching quesid from bookmark array in user
            { new: true}  //  Returns the updated Document
        )
        res.status(200).json({
            msg: 'bookmarked question removed',
            bookmark: updatedUser.bookmark
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error',
            error: error.message,
            error: error
        })
    }
}

const getBookmark = async (req, res) => {
    const userId = req.user.userId
    try {
        const user = await User.findById({_id: userId})
        if(!user) {
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        res.status(202).json({
            msg: 'getting all bookmarked question successfully',
            bookmark: user.bookmark
        })
        
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error',
            error: error.message,
            error: error
        })
    }
}

module.exports = {
    addBookmark,
    removeBookmark,
    getBookmark
}