// file for routers

const {Router} = require("express");
const {getToDoSchemaMongo, saveToDo, updateToDo, deleteToDo} = require("../controllers/ToDoController")

const router = Router()
//1.router is a instance of express Router.
//2. router has http method: Get,Post,Put extra

//1.this will handle: get request
//2.The following example illustrates the definition of a simple route.(routing)
//4.res.json() :Sends JSON response.
//5.Routing refers to the definition of application endpoints (URIs) and how they respond to client requests. For an introduction to routing,

//3.when a GET request is made to the homepage(/), respond with: res.json()
router.get('/', getToDoSchemaMongo)
//router.get('/',getToDoSchemaMongo): when browser has accessed to '/' home, router gets getToDoSchemaMongo from server.
//getToDoSchemaMongo is exported from ToDoController.js
//getToDoSchemaMongo is the schema of MongoDB
//router imported getToDoSchemaMongo from ToDoController.js

router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;
//making modlue with router.