// Define: How our data is going to be saved in out DB.
// schema is created under file:model

const ToDoModel = require('../models/ToDoModel')
// declare our model var, which is the MongoDB Schema we created.

const ToDoModelCont = require('../models/ToDoModel')

module.exports.getToDoSchemaMongo = async (req, res) =>{
//1. create async function for asynchronious execution of commands,
//1. we will save response from async funtion into 
//1.module.exports.getToDoSchemaMongo in 


// this line will give all the 'ToDoSchemaMongo'
    const ToDoSchemaAll= await ToDoModel.find()
//2. we await until ToDoModel.find() successfully ends.
//3. ToDoModel.find(): find all data in the ToDoModel collection(schema)
//4. and then when find() is successfully done, we save the returned data into const ToDoSchemaAll
//5. Note: await function can be declared only in async function.
//ex: Q1. insb컬렉션의 모든 데이터를 조회해라 = db.insb.find();

// so we are going to return 'ToDoSchemaMongo' as a response which is a MongoDB schema the function found through find() function
//.send(): means return
    res.send(ToDoSchemaAll)
}

module.exports.saveToDo= async(req,res) =>{
    const {text} = req.body
    // we are going to send this text to the route

    ToDoModel
        .create({text})
        .then((data)=>{

            
        }
        )


}

