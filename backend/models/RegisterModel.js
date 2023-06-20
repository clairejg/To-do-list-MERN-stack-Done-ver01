// const mongoose = require('mongoose')
// //mongoose:a Node. js-based Object Data Modeling (ODM) library for MongoDB
// //A 'Mongoose Schema' method defines the structure and property of the document in the MongoDB collection.
// // "mongoose schema" method: enables us to creat MondoDB DB with Javascript
// //object 'student' creation example:
// // const student ={
// //  firstName: 'Kaleb',
// //    grade: sophomore
// //};



//     const regiSchema = new mongoose.Schema({

//     userName:{
//         type: String,
//         require: true,
//         maxlenght:50,
//         //userName column is a String type.
//         //maxlength is 50 chars.
//     }

//     });
    
//     //  email:{
//     //     type: String,
//     //     trim: true, //remove whitespace? 공백을 제거힌디
//     //     unique: 1 //not allowing duplicate value. (중복을 제거한다)
//     // }
//     // 


// module.exports = mongoose.model('RegiSchema', regiSchema)
// // going to use the module at ToDoController.js
// // ToDoSchemaMongo is the collection name in M