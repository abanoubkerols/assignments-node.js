import { Router } from "express";
import { auth } from "../../middleWare/auth.js";

import * as noteModule from './Controller/note.controller.js'

const routerForNote = Router()

routerForNote.post('/addnote',auth(),noteModule.addNote)

routerForNote.put("/updateNote/:id", auth() , noteModule.updateNote)

routerForNote.delete('/deleteNote/:id',auth(),noteModule.deleteNote)

routerForNote.get('/allNotes',auth(),noteModule.allNotes)

routerForNote.get('/specificNote/:id',auth(),noteModule.specificNote)

routerForNote.get('/searchNote',auth(),noteModule.searchNote)

export default routerForNote
