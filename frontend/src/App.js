//
import ToDo from "./components/ToDo";
import {useEffect, useState} from "react";
import {getAllToDo, addToDo, updateTodo} from "./utils/HandleApi";
//
//지금까지 우리가 리액트 컴포넌트를 만들 때는, 동적인 부분이 하나도 없었습니다. 값이 바뀌는 일이 없었죠. 
//이번에는 컴포넌트에서 보여줘야 하는 내용이 사용자 인터랙션에 따라 바뀌어야 할 때 어떻게 구현할 수 있는지에 대하여 알아보겠습니다.
//컴포넌트에서 동적인 값을 상태(state)라고 부릅니다. 리액트에 useState 라는 함수가 있는데요,
// 이것을 사용하면 컴포넌트에서 상태를 관리 할 수 있습니다.

function App() {

  const [toDo, setToDo] = useState([]) // ToDo's state.
  // syntax of useState.
  // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. i.e. useState(0)

  // 이 useState([]) 함수를 호출해주면 배열이 반환되는데요, useState: 여기서 첫번째 원소 'toDo'는 현재 상태, 두번째 원소는 Setter 함수입니다.
  // setToDo's job: When 'useEffect()' updates, ToDo, there will be new addition of [],'empty erray'
  // const[currentState,SetterFunction ]
    //i.e. useState([]): Empty Array.

  const [text,setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  //default useState is false
  
  const [toDoId, setToDoId] = useState("")
  //we must add newStates for toDoId, and setToDoId, for onClickevent on App.js
  // and for updateToDo.


  //useState() and useEffect() need each other: whenever there is a new ToDo item from 'user input' on the browser,
  //useState() and useEffect() are used to update the newUserInput into DB and Broswser.
  //the useEffect takes callback function that produces array.
  useEffect(() =>{
    getAllToDo(setToDo)
  },[])

  // declaring the function 'updateMode' with function calls
  const updateMode = (_id, text) =>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)

  }

    return (
    <div className="App">

    <div className="container">
      <h1>This is ToDoApp</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="type input for To Do.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          //1.onchange 이벤트는 input 태그의 포커스를 벗어났을때 (즉, 입력이 끝났을때) 발생하는 이벤트이다.
          //2.입력이 끝났을때의 값만 콘솔창에 도출된 것을 확인할 수 있다.
          //3.이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다.
          // 이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
          //4.input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요합니다. 그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트 됩니다.
          //


/* You have two different things happening here.

Event (e):
First you have e which is short for event. To understand what it does change onChange={(e) => setName(e.target.value)} to onChange={(e) => console.log(e)}. Inspect the log and you'll find a list of events in which one of them is target. Open target (if not already opened) and within target, you'll find value. In short, this is the target value that's being typed in your input, it's what the user is typing.
 */

          />


          <div className="addButton" onClick={isUpdating ? 
            () => updateTodo(toDoId, text, setToDo, setText, setIsUpdating) : ()=>addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add to-do item " }
            {/* if state isUpdating, button:"Update, if isUpdating is false, button:"Add to-do item" */}
          </div>
          {/* |=> onClick event, we are calling a function '' which is declared in HandleApi.js */}
          {/* for updateTodo, there is a callback function,,? */}

        </div>

        <div className="list">

          {toDo.map((item) =>
           <ToDo 
           key={item._id} 
           text={item.text}
           updateMode = {()=> updateMode(item._id, item.text)}
          />
          )}
          {/* updateMode is declared above */}
          {/* setting key and text of ToDo object using map() */}
        
          {/* <div>{key}, {value} </div> where, key==age, value:30
          then the result print out: <div> age 30 </div> */}
          {/* var obj = {}; // creating object called 'obj' */}
          {/* let array = ["Monday", "Tuesday", "Wed"];
          let map = array.map(item => "Today is:"+item  );
          //기존요소 + 요일 추가
          console.log(map);

          //결과
          ["Today is: Monday", "Today is: Tuesday" , "Today is: Wed"] */}



          <ToDo text="hihi"/>
          <ToDo text="hihi"/>
        </div>


    </div>

     
    </div>
  );
}

export default App;



