import multer from "multer";
import { nanoid } from "nanoid";

export const HM = (err, req, res, next) => {
    if (err) {
        res.status(400).json({ message: "multer err", err });
    }
    else {
        next()
    }
}
const profile = function mymulter() {
    const mul = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, nanoid() + "_" + file.originalname)
        }
    })
    function fileFilter(req, file, cb) {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') {
            cb(null, true)
        } else {
            req.imageError = true;
            cb(null, false)
        }
    }

    const upload = multer({ storage: mul, dest: "uploads", fileFilter })
    return upload
}

export default profile