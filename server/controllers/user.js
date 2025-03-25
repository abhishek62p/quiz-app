const { mongoose } = require('mongoose');
const { User } = require('../models/model');
const uploadOnCloudinary = require('../config/cloudinary');
const cloudinary = require('cloudinary').v2;

const updateProfilePicture = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            msg: 'No file uploaded'
        })
    }
    console.log('req.file: ', req.file);

    const userId = new mongoose.Types.ObjectId(req.user.userId)
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        if (user.profilePicture) {
            //  extract public id from cloudinary url
            const publicId = user.profilePicture.split('/').pop().split('.')[0]
            await cloudinary.uploader.destroy(publicId)
        }

        const imageUrl = await uploadOnCloudinary(req.file.path)
        console.log('imgurl: ', req.file);
        if (!imageUrl) return res.status(500).json({ msg: 'Failed to upload to cloudinary' })

        user.profilePicture = imageUrl
        await user.save()
        res.status(202).json({
            msg: 'Profile picture uploded successfully',
            profilePicture: user.profilePicture

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
    if (!user || !user.profilePicture) {
        return res.status(404).json({
            msg: 'No profile picture found'
        })
    }

    const pictureUrl = user.profilePicture
    try {
        const publicId = user.profilePicture.split('/').pop().split('.')[0]
        await cloudinary.uploader.destroy(publicId)
        user.profilePicture = ''
        await user.save()
        res.status(200).json({
            msg: 'User Profile Picture is deleted',
            pictureUrl: pictureUrl
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error deleting profile picture',
            error: error.message
        })
    }
}

const getUserProfile = async (req, res) => {
    try {
        const userId = mongoose.Types.ObjectId(req.user.userId)
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                msg: 'User does not found'
            })
        }

        res.status(200).json({
            msg: 'Getting user successfully',
            user: user
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error while getting user profile',
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = mongoose.Types.ObjectId(req.user.userId)
        const user = await User.findByIdAndDelete(userId)
        if(!user) {
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        res.status(202).json({
            msg: 'User deleted successfully',
            deletedUser: user
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error while deleting user account',
            error: error.message
        })
    }
}

module.exports = {
    updateProfilePicture,
    deleteProfilePicture,
    getUserProfile,
    deleteUser,
}