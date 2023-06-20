// // Define: How our data is going to be saved in out DB.
// // schema is created under file:model


// // declare our model var, which is the MongoDB Schema we created.
// // const ToDoModelCont = require('../models/ToDoModel')

// const RegiModel = require('../models/RegisterModel')

// //reqUser starts
// //1. create a new user
// // go to router.js to add this
// export async function create(req,res){
    
//     const userNew= new RegiModel({
//         userName: req.body.name,
//     })

//     //now save created user into the DB
//     try{
//     userNew
//         .save(userNew)
//         .then(data=>{
//             res.send(data)
//             res.json({ msg: "Data Saved Successfully...!"})
//         })
//     }
//         catch(error) {
//             res.json({ error })
//             res.json({ msg: "ERROR..!"})
//         }

// }




// // module.exports.UserRegiSchema = async(req,res) =>{
// //    // const regiSchemaInput = await RegiModel.create()
// //     //model.create() API: created an Object for the Schema to sends the schema to the DB
// //     console.log('from ReigController:')
// //     console.log(req.body)

// //     const {userName} =req.body;
// //     let userNameError = "";

// //     if(await  RegiModel.exists({userName})){
// //         userNameError = " the user name is already taken";
// //         errorExists= 1;
// //     }

// //     try{
// //         await RegiModel.create({
// //             userName,

// //         });

// //         return res.status(200).send({message: "RegiController: Success Joined!"});
// //     }catch(error){
// //         return res.status(500).render({message: error});
// //     }


    

// // }





// // //regUser ends

// // module.exports.getToDoSchemaMongo = async (req, res)=>{
// // //1. create async function for asynchronious execution of commands,
// // // 또한 외부 데이터베이스에 저장하는 것이므로 비동기 처리를 해주어야 합니다.
// // //1. we will save response from 'async funtion' into 
// // //1.module.exports.getToDoSchemaMongo in ToDoRoutes.js

// // const ToDoSchemaAll= await ToDoModel.find()
// // // this line will give all the 'ToDoSchemaMongo'
// // //2. we await until ToDoModel.find() successfully ends.
// // //3. ToDoModel.find(): find all data in the ToDoModel collection(schema)
// // //4. and then when find() is successfully done, we save the returned data into const ToDoSchemaAll
// // //5. Note: await function can be declared only in async function.
// // //ex: Q1. insb컬렉션의 모든 데이터를 조회해라 = db.insb.find();

// //     res.send(ToDoSchemaAll)
// // // so we are going to return 'ToDoSchemaMongo' as a response which is a MongoDB schema the function found through find() function
// // //.send(): means return
// // }
// // module.exports.saveToDo= async(req,res) =>{
// //     //syntax: Function(Request, Response)
// //     const {text} = req.body
// //     // we are going to send this text to the route
// //     ToDoModel
// //         .create({text})
// //         //Object.create(): method creates a new object,
// //         .then((data)=>{
// //             //then(callBackFunct(that takes 'data' param))
// //             console.log("Added Successfully !! ");
// //             console.log("Here is the data that has been added to ToDoModel Schema ");
// //             console.log(data);
// //             res.send(data)
// //             //sending data to our database
// //             //send the {text} to the route at 'ToDoRoute.js' as 'router.post('/save', saveToDo) 
// //         })
// // }

// //     //now creating a module that will update the DB 
// // module.exports.updateToDo = async (req,res) =>{
// //     // async callback functions that takes two param 'req' and 'res'
    
// //     //we need to things to updat the DB: _id, text/
// //     //based on id we are going to update the DB.
// //     // {} is used to declare an object
// //     //text is the new 'string' that we are going to insert into DB for the update.
// //     const{_id, text}= req.body

// //     ToDoModel
// //     .findByIdAndUpdate(_id,{text})
// //     .then(()=>res.send("The DB item  is updated Successfully !"))
// //     .catch((err)=> console.log(err))

// // }
// //    //now creating a module that will delete datas in DB
// // module.exports.deleteToDo = async (req,res) =>{

// //     const{_id}= req.body
// //     ToDoModel
// //     .findByIdAndDelete(_id,)
// //     .then(()=>res.send("The DB data is deleted Successfully !"))
// //     .catch((err)=> console.log(err))
// // }
