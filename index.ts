// tsc --watch
// nodemon .

// npm i --save-dev @types/express
import express from 'express'

let server = express()

// https://www.npmjs.com/package/mysql2
import { Connection, createConnection } from "mysql2/promise"

const connection: Connection = await createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "mydb",
})

const sql = 'select ?+? as result'
const params = [11, 33]
const [rows] = await connection.execute<any[]>(sql, params)
console.log("result is", rows[0].result)

import { urlencoded } from 'express'
server.use(urlencoded({ extended: true }))

import build_router_root from './routes.js'
server.use("/", build_router_root(connection))

// nodemon .
// open http://localhost:8080
server.listen(8080)
