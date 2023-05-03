import express from 'express'
import router from './modules/user/user.route.js'
import Connection from './db/connection.js'

const app = express()

app.use(express.json())
app.use(router)
const port=3000
Connection()



app.listen(port,()=>{
    console.log('server is run at ... '+ port);
})