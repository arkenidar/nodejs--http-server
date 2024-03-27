// tsc --watch
// nodemon .

// npm i --save-dev @types/express
import express from 'express'

let server = express()

import router from './routes.js'
server.use("/", router)

// nodemon .
// open http://localhost:8080
server.listen(8080)
