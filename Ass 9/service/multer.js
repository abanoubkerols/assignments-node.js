import multer from "multer";
 
export const validationType = {
    image: ["image/png", "image/jpeg", "image/jpg",]
}

export const HM = (err, req, res, next) => {
    if (err) {
        res.json({ message: "invalid type", err })
    } else {
        next()
    }
}

const profile = function mymulter(validationTypes) {

    const mul = multer.diskStorage({
    })
    function fileFilter(req, file, cb) {
        if (validationTypes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            req.imageError = true;
            cb(null, false)
        }
    }
    const upload = multer({ fileFilter, storage: mul, dest: `uploads` })
    return upload
}

export default profile