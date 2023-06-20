// // RegisterUser.js
// import React, { useState, useEffect} from "react";
// //import 'useState function;
// import './RegisterUser.css';
// import {getAllRegi} from "../utils/HandleApi";
// import RegiComp from "./components/RegiComponent";

// import axios from "axios";

// const RegisterDone = () =>{


//     // < -2- > Begins
//     // 1.Purpost of useState(): to
//     // 2.syntax: const[userNumber, setNumber] = useState(3);  // param is 3 that is initiating value of 'userNumber'
//     //2. useState(3) function is initiating the 'userNumer' as the parameter '3'
//     // 3.When we call 'useState()' the array is returned. Let's call that arrary 'stateArray'
//     //the first element of the 'stateArray' is 'userNumber'
//     //the second element of the 'stateArray' is 'setterFunction' =='setNumber
//     // 4.
//     const [userValueName, setUserValName ] = useState(""); // ""Declare 'userValueName' as empty string.
//     //useState has retured the array [" ", setUserValName];
//     //이는 userValueName라는 하나의 상태값만 setUserValName 함수에서 관리할 수 있습니다.
//      // < -2- > Ends

//      //<-4> Begins
//      useEffect( ()=>{
//         getAllRegi(setUserValName)}, []);
//         console.log("useEffect() due to html rendering")
//     //Syntax: useEffect(functino, array) executes when Http Web is being updated(rendered)
//     // useEffect에서 설정한 함수 내용을, 컴포넌트가 화면에 맨 처음 렌더링될 때만(마운트될 때만) 실행하고 업데이트 될 때는 실행하지 않고자 할 경우 두 번째 인자에 비어있는 배열인 [] 을 넣습니다.
//     //반대로 특정 state 값이 변할 때마다 작업을 수행하려면 두 번째 인자에 [상태명] 으로 입력하여 넣습니다.
//     //ex)useEffect(() => {
//     //   console.log(name);
//     // }, [name]); //아래 코드를 작성하면 name을 input에 입력할 때마다 name 값이 바뀌고 콘솔에 로그가 찍힐 것입니다.

//     //<-4> Ends

//     // < -3- > Begins
//     const baseURL = "http://localhost:3001"
    
//     // axios
//     // .post(`${UrlDestination}`, {DataObjectToSendToURL })
//     //the dataObject is the form of 'key'&'value'
//     const register = () =>{

//     //3-1.
//         axios
//     .post(`${baseURL}/registerDone`,{
//         userNamePost: userValueName

//     })
//     // send(==post) the data 'userNamePost: userValueName', to the URL we want.
    
//     //3-2. after, 'post'is done. The registration is done, then we do
//     //receive 'response' .
//     .then((response)=>{
//         console.log('Well done! thie is, axios .then(response)');
//         console.log('Well done! thie is, axios .then(response)');

//     })

// //
//     }
//     // < -3- > Ends




//     // < -1- > Begins
//     return(
//         <>
//         <div>
//         <p>register page</p>

//         {/* 1.use 'form tag'
//         form tag syntax: <form action="입력 데이터를 처리할 페이지 주소" 
//         method="입력 데이터를 서버에 전달할 http method, either 'get' or 'post' "></form>
//         */}


//         <form action = "/registerDone" method="post">
//         {/* when input is 'submitted' the form sends 'post'request to the /registerDone */}
//         {/* the 'user input' of the form is being delieverd to the Server and MongoDB DB, throgh 'post' request */}
//             <label for="name">
//             Name
//             </label><input 
//             type="text" 
//             id="regNameId"
//              name="regName" 
//              value={userValueName} 
//              //value var is what we use as 'key' for axios.

//              //1. onChange(e)== when there is 'event==a change==a user is typing' in the 'NameForm', the 'arrow function'=='setUserValName' will be executed,
//              //2. parameter 'event' == Claire
//              //3. setUserValName(receives 'Clarie')
//              //4. thus 'setUserValName()' is setting the 'userValName' as the parameter 'Claire'
//              //5. event.target.value == 'clarie'
//              onChange={(event)=>{
//                 setUserValName(event.target.value);
//                 //
//              }}
//             /><br/>
//             {/* < -1- > Ended */}



//             {/* I set, value={userValueName}, thus we have to declare, variable 'userValueName' at the outside of the 'return body' */}
//             {/* <label for="id">ID</label><input type="text" id="regIdId" name="regId" value={userValueId} /><br/>
//             <label for="pw">Password</label><input type="text" id="regPwId" name="regPw" value={userValuePw}  /><br/>
//             */}
//             {/* <label for="id">ID</label><input type="text" id="regIdId" name="regId" value="regIdValue"/><br/> */}
            

//             <input type="submit" value ="Submit Register Form" onClick={()=>{register()}}></input>
//             {/* when 'submit' is onclicked by users, the fuction 'register()' is called*/}


//         </form> 
//         </div>


// {/* here */}
//                 <div className="list">

//         {userValueName.map((item) =>
//         <RegiComp
//         keyRegi={item._id} 
//         textRegi={item.text}
//         // updateModeRegi = {()=> updateMode(item._id, item.text)}
//         //  deleteToDoR = {() => deleteToDo(item._id, setToDo)}
//         //add deleteTodo. In ToDO.js the name is declared as deleteToDo

//         />
//         )}

//         </div>
 
//         </>


//         // <a href="/register">
//         // <input type="button" id="loginPg"  value="Register here" onclick="registerUser()"></input>
//         // </a>
        

//     );

// }

// export default RegisterDone;