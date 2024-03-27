import express from "express";
let router = express.Router();
// curl http://localhost:8080/?name1=12345
router.get("/", (request, response) => {
    // HTTP request & HTTP response
    response.json(request.query);
});
export default router;
