import express, { Router } from "express"

let router: Router = express.Router()

// curl http://localhost:8080/?name1=12345
router.get("/", (request, response) => {
    // HTTP request & HTTP response
    response.json( request.query )
})

export default router
