const { mongoose } = require('mongoose');
const { User } = require('../models/model')

const updateProfilePicture = async (req, res) => {
    if(!req.file) {
        return res.status(400).json({
            msg: 'No file uploaded'
        })
    }
    console.log('reqfile',req.file);
    const filePath = `/uploads/${req.file.filename}`
    console.log('filepath',typeof(filePath));

    const userId = new mongoose.Types.ObjectId(req.user.userId)
    console.log(userId);
    try {
        await User.findOneAndUpdate({_id: userId}, { profilePicture: filePath})
        res.status(202).json({
            msg: 'Profile picture uploded successfully',
            filePath: filePath,
            profilePicture: User.profilePicture

        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error updating profile picture',
            error: error.message
        })
    }
}

const deleteProfilePicture = async (req, res) => {
    const user = await User.findById(new mongoose.Types.ObjectId(req.user.userId))
    if(!user || !user.profilePicture) {
        return res.status(404).json({
            msg: 'No profile picture found'
        })
    }
    try {
        const filePath = `server${user.profilePicture}`
    } catch (error) {
        return res.status(500).json({
            msg: 'Error deleting profile picture',
            error: error.message
        })
    }
}

module.exports = updateProfilePicture