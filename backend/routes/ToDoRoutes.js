// file for routers

const {Router} = require("express")

const router = Router()

//1.this will handle: get request
//2.The following example illustrates the definition of a simple route.(routing)
//4.res.json() :Sends JSON response.
//5.Routing refers to the definition of application endpoints (URIs) and how they respond to client requests. For an introduction to routing,

//3.when a GET request is made to the homepage(/), respond with: res.json()
router.get('/',getToDoSchemaMongo)
//getToDoSchemaMongo is exported from ToDoController.js
//getToDoSchemaMongo is the schema of MongoDB
//router imported getToDoSchemaMongo from ToDoController.js

module.exports = router