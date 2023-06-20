// // this is practice page for
// // fullstack web developer interview.

// // import RegiComp from "./components/RegiComponent";
// import { useEffect,useState} from "react";
// // import {getAllToDo} from "./utils/HandleApi";
// // , addToDo, updateToDo, deleteToDo
// import './todoMain.css'
// import './App3.css';
// // import axios from "axios";

// import {getUserRegi, addRegi} from "./utils/HandleApi";
// // we are using 'axios' to do http methods, such as request, post etc)
// // import {getAllRegi} from "./utils/HandleApi";


// //1. html
// //2. get element by id.
// //3. array, list
// //4. map
// //5. userState
// //6. Use/retrieve MongoDB data.

// const RegisterUserApp =() =>{


//     let [userValueName, setUserValName ] = useState(" "); // ""Declare 'userValueName' as empty string.
//     // const baseURL = "http://localhost:3001";

//     useEffect(()=>{
//         // getAllRegi(setUserValName) 
//         getUserRegi(setUserValName)
//         console.log("useEffect() due to html rendering")},
//         []);

//       const nameEvent = (e) =>{
//         setUserValName(e.target.value);
//       };

//       let regiBody={
//         userName: userValueName,
//       };
    

//   return(
//     //html begins
    
//       // <div className='container'>
//       //1.html tag syntax:<START TAG> CONTENT </END TAG>
//         <div className='titleD'>Rgister user page
//         {/* <p>hi</p> */}
//         <div className='Div2'>title Div</div>
        
//         {/* begin of TODO */}

//         <form name ="RegiForm" action="/registerConfirm" method="post">
//             <div>
//             <label htmlFor="nameId">User Name</label>
//             <input id = "nameId" type="text" name="userNameInput" placeholder="type your name"
//             value={userValueName}
//             onChange={nameEvent}  />

//              {/* onChange={(event)=>
//                 {setUserValName(event.target.value)}
//            */}
    
          

//             {/* <a href="/registerConfirm"> */}
//             {/* <button onclick={()=>{register();}} > */}
//             <button onClick={()=>{addRegi(userValueName, setUserValName);}} >
      
                
                
//                 click to register </button>
//             {/* </a> */}
//             </div>

//         </form>
//         {/* {userValueName.map((item) =>
//            <RegiComp
//            key={item._id} 
//            text={item.newUser}
         
//            //add deleteTodo. In ToDO.js the name is declared as deleteToDo

//           />
//           )} */}


// {/* //end of Parent div */}
//         </div>

//   );

// }

// export default RegisterUserApp;
