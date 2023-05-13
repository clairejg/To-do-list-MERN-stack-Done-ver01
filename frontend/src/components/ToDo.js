//rafce
import React from 'react'
// import {BiEdit} from "react-icons/bi"
// import { AiFillDelete  } from "react-icons/ai"
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            {/* The onclick event occurs when the user clicks on an HTML element. */}
            {/* i.e. <button onclick="myFunction()">Click me</button> */}
            <BiEdit className="icon" onClick={updateMode}/>
            <AiFillDelete  className="icon" onClick={deleteToDo}/>
        </div>
    </div>

 )
}

export default ToDo

