import './App.css';
import React from 'react';
import { useState,useRef } from 'react';

function App() {

  const [todoList,setTodoList]=useState([])
  const inputRef=useRef(null)


  const handleInput =()=>{
    inputRef.current.focus()
    let task={
      id:todoList.length===0?0:todoList[todoList.length-1].id+1,
      task:inputRef.current.value,
      isComplete:false
    }
    setTodoList([...todoList,task])
    inputRef.current.value=""
  }

  const removeTask =(id)=>{
    setTodoList(todoList.filter((task)=>{return task.id!==id}))  
  }

  const changeStatus =(id)=>{
    setTodoList(
      todoList.map((todo)=>{
        if(todo.id===id){
          if(todo.isComplete===true){
             return {...todo,isComplete:false}
          }else{
            return {...todo,isComplete:true}
          }
        }else{
          return todo
        }
      })
    )
  }




  return (
    <div className="App">
      <div className='main'>
          <div className="add-todo">
            <input type='text' ref={inputRef}  className="input"  placeholder='ENTER TASK...'/>
            <button  onClick={handleInput}>ADD</button>
          </div>
          <div className="display-todo">
            {todoList.map((todos,key)=>{
              return(
                <div key={key} className="todos">
                  <input onClick={()=>{changeStatus(todos.id)}} defaultChecked={todos.isComplete} type="checkbox" className="ticInput" />
                  {console.log(todos)}
                  <h2 className={todos.isComplete?"todo-completed":"todo-not"}>{todos.task}</h2>
                  {!todos.isComplete &&<button onClick={()=>{removeTask(todos.id)}} >x</button>}
                </div>
              )
            })}

          </div>
      </div>
    </div>
  );
}

export default App;