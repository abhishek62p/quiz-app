const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'temp')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cd) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
    if(allowedTypes.includes(file.mimetype)) {
        cd(null, true)
    } else {
        cb(new Error('Only JEPG, PNG, and JPG files are allowed'), false)
    }
}

const uplaod = multer({ storage: fileFilter})
module.exports = uplaod