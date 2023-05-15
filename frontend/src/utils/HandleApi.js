import axios from 'axios'
// Axios는 node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 입니다. 그것은 동형 입니다(동일한 코드베이스로 브라우저와 node.js에서 실행할 수 있습니다). 서버 사이드에서는 네이티브 node.js의 http 모듈을 사용하고,
//  클라이언트(브라우저)에서는 XMLHttpRequests를 사용합니다.


const baseUrl = "http://localhost:3001"
//which is a server port for DB: backend!

const getAllToDo = (setToDo)=>{
    //axios.get(baseUrl): get(baseURl) using axios library.
    axios 
    .get(baseUrl)
    .then(({data}) =>{
        // take {data} as a parameter,
        console.log('In HandleApi.js, From getAllToDo, : data is:', data);
        setToDo(data)

        })
}

const addToDo = (text, setText, setToDo) => {
    //param: 
    //1.'text' which to be added by user as ToDo item, then we have to save the 'text' into our DB
    //2. setText: coming from App.js useState()// setToDo's job: When 'useEffect()' updates, ToDo, there will be new addition of [],'empty erray'
    //3. setToDo: coming from App.js useState()

    axios
        .post(`${baseUrl}/save`, {text})
        // {text} to be passed in the body.
        //POST method : axios.post(url, data[, config]).
        //post 메서드에는 일반적으로 데이터를 Message Body에 포함시켜 보낸다. 위에서 봤던 get 메서드에서 params를 사용한 경우와 비슷하게 수행된다.
       /*  example:
        axios.post("url", {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then(function (response) {
            // response  
        }).catch(function (error) {
            // 오류발생시 실행
        }) */




        // axios
        .then((data) => {
          /*   const currentDate = new Date();
            currentDate.setTime(unixtime*1000);
            currdateString = currentDate.toUTCString(); */

 /*            var timestamp = 1301090400;
            const currDate = new Date(timestamp * 1000);
            document.write( currDate.toLocaleString() );
            var currdateString= currDate.toLocaleString(); */

            


        function getTimeStamp() {
            var now = new Date();
            return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
                            + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                            .getSeconds()) : (now.getSeconds())));
        }


            console.log('In HandleApi.js, From addToDo, : data is:' ,data)
            setText("")
            console.log('In HandleApi.js, From addToDo, : text is:' ,text, ',TimeStamp:' ,getTimeStamp() )
            //setText(""): clearing the text field by empty string

            //we are fetching all the ToDos, including the new ones.
            getAllToDo(setToDo)
            //now go to app.js and call this addToDo function

        } )


}

const updateTodo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    //param: 
    //1.'text' which to be added by user as ToDo item, then we have to save the 'text' into our DB
    //2. setText: coming from App.js useState()// setToDo's job: When 'useEffect()' updates, ToDo, there will be new addition of [],'empty erray'
    //3. setToDo: coming from App.js useState()

    axios
        .post(`${baseUrl}/update`, {_id: toDoId, text})
        // {txet} to be passed in the body.
        // axios
        .then((data) => {

            console.log('In HandleApi.js, From addToDo, : data is:' ,data)
            setText("")
            //setText(""): clearing the text field by empty string
            //setText to blank
            //we are fetching all the ToDos, including the new ones.

            setIsUpdating(false)
            getAllToDo(setToDo)
            //now go to app.js and call this addToDo function

        } )
        .catch((err)=> console.log(err))


}





export {getAllToDo, addToDo,updateTodo}
// we are exporting these two functions to use them at App.js
//1.
//2. addToDo function is being used to add ToDoItem whenever there is a onClick event.

