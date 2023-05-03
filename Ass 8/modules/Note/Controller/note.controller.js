import userModel from '../../../DB/models/user.model.js'
import noteModel from './../../../DB/models/note.model.js'


// ## 1- CREATE note  (user must be logged in and confirmed)(Aplly Joi validation)

export const addNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const id = req.user._id
        const user = await userModel.findById(id)
        if (user.confirmEmail) {
            const blog = new noteModel({ title, content, createdBy: req.user._id })
            const savedNote = await blog.save()
            res.json({ message: "note added ", savedNote })
        }
        else {
            res.json({ message: "your email not verify" });
        }
    } catch (error) {
        res.json({ message: "catch error", error })

    }


}


// ## 2- UPDATE note  (user must be logged in and confirmed)(Aplly Joi validation)

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body;
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const note = await noteModel.findOneAndUpdate({ _id: id, createdBy: req.user._id }, { title, content }, { new: true })
            res.json({ message: "note updated ", note })
        }
        else {
            res.json({ message: "your email not verify" });
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}


// ## 3- DELETE note  (user must be logged in and confirmed)(Aplly Joi validation)

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const note = await noteModel.findOneAndDelete({ _id: id, createdBy: req.user._id })
            res.json({ message: " deleted note Done ", note })
        }
        else {
            res.json({ message: "your email not verify" });

        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}

// ## 4- get all notes(user must be logged in)(user must be logged in and confirmed)

export const allNotes = async (req, res) => {
    try {


        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const notes = await noteModel.find({ createdBy: req.user._id }).populate(
                {
                    path: "createdBy",
                    select: 'userName email'
                }
            )
            res.json({ message: "Done", notes })
        }

        else {
            res.json({ message: "your email not verify" });

        }

    } catch ({ error }) {
        res.json({ message: "catch error", error })

    }

}

// ## 5- get specific note by id (user must be logged in and confirmed)(Aplly Joi validation)

export const specificNote = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const notes = await noteModel.find({ _id: id, createdBy: req.user._id }).populate(
                { path: "createdBy", select: 'userName email' })
            if (notes.length) {
                res.json({ message: "Done", notes })
            }
            else{
                res.json({ message: "you are not authorized to show this note" })
            }
        }
        else {
            res.json({ message: "your email not verify" });
        }

    } catch ({ error }) {
        res.json({ message: "catch error", error })

    }

}

// 6- search about note by (title or content) (user must be logged in and confirmed)(Aplly Joi validation)

export const searchNote = async (req, res) => {
    try {
        const id = req.user._id
        
        const user = await userModel.findById(id)
        if (user.confirmEmail) {
            const note = await noteModel.find({ $or:[{title: req.body.title},{content:req.body.content}]})
            if(note.length){
                res.json({ message: "note founded ", note })

            }else{
                res.json({ message: " no note " })

            }
        }
        else {
            res.json({ message: "your email not verify" });
        }
    } catch (error) {
        res.json({ message: "catch error", error })

    }


}