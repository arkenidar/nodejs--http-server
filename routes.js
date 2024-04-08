import { Router } from 'express';
let router = Router();
export default router;
// curl http://localhost:8080/?name1=12345
router.get("/", (request, response) => {
    // HTTP request & HTTP response
    response.json(request.query);
});
// curl http://localhost:8080/sql
router.get("/sql", async (request, response) => {
    const connection = request.app.get("connection");
    const sql = 'select ?+? as result';
    const params = [11, 33];
    const [rows] = await connection.execute(sql, params);
    console.log("result is", rows[0].result);
    response.json(rows);
});
// curl http://localhost:8080/sql2?x=5
router.get("/sql2", async (request, response) => {
    const x = request.query.x;
    const number = parseFloat(x || "0");
    const connection = request.app.get("connection");
    const sql = 'select ?*2 as result';
    const params = [number];
    const [rows] = await connection.execute(sql, params);
    console.log("result is", rows[0].result);
    response.json(rows);
});
