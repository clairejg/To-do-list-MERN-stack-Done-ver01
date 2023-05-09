// Define: How our data is going to be saved in out DB.
// schema is created under file:model

const ToDoModelCont = require('../models/ToDoModel')

module.exports.getToDoSchemaMongo = async (req, res) =>{

// this line will give all the 'ToDoSchemaMongo'
    const ToDoSchemaAll= await ToDoModel.find()

// so we are going to return ToDoSchemaMongo as a response.
    res.send(ToDoSchemaAll)

}