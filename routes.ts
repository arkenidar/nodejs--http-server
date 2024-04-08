import { Router } from 'express'
let router: Router = Router()
export default router

import { Connection } from "mysql2/promise"

// curl http://localhost:8080/query?name1=queried
router.get("/query", (request, response) => {
    // HTTP request & HTTP response
    response.json(request.query)
})

// curl -X POST -d "name1=embodied" http://localhost:8080/body
router.post("/body", (request, response) => {
    // HTTP request & HTTP response
    response.json(request.body)
})

// curl http://localhost:8080/sql
router.get("/sql", async (request, response) => {
    const connection: Connection = request.app.get("connection")

    const sql = 'select ?+? as result'
    const params = [11, 33]
    const [rows] = await connection.execute<any[]>(sql, params)
    console.log("result is", rows[0].result)

    response.json(rows)
})

// curl http://localhost:8080/sql2?x=5
router.get("/sql2", async (request, response) => {
    const x: string = <string>request.query.x
    const number: number = parseFloat(x || "0")

    const connection: Connection = request.app.get("connection")

    const sql = 'select ?*2 as result'
    const params = [number]
    const [rows] = await connection.execute<any[]>(sql, params)
    console.log("result is", rows[0].result)

    response.json(rows)
})
