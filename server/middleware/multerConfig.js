const multer = require('multer');
const path = require('path');

// store the file in local storage temporarily
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'temp')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})



const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
    if(allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error('Only JEPG, PNG, and JPG files are allowed'), false)
    }
}

const uplaod = multer({ storage, fileFilter})
module.exports = uplaod