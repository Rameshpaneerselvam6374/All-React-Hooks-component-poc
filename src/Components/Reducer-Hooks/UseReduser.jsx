// import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap';

const intialState=[
    {id:1,name:"ramesh"},
    {id:2,name:"dhinesh"}

];

function reducer(state,action){
switch(action.type){
    case 'add-task':
        return [...state,{id:state.length +1,name:action.payload}]
        case 'delete-task':
            return state.filter((task)=>task.id !== action.payload)
        default:
            return state;
}
}

function init(intialState){
    // const data = [...intialState,{id:1,name:"Todos"}];
    // return data;     // data is fixed
    return intialState
}

const UseReduser = () => {
    const [todos,dispatch] = useReducer(reducer,intialState,init);

   const handleChange= (e) => {
    if(e.key==="Enter"){
        dispatch({type:"add-task",payload : e.target.value})
    }
   }

   const deleteTask = (id) =>{
    dispatch({type:"delete-task",payload :id})
   }

  return (
    <>
    <div>
      <h3>Task List {todos.length}</h3>
      <label htmlFor="task">Enter Task</label>
      <input type="text" id='task' onKeyDown={(e)=>handleChange(e)}/>
       <ul>
        {todos.map((todo)=>(
           <li key={todo.id}>
            {todo.id}.{todo.name}
            <button onClick={()=>deleteTask(todo.id)}>Delete</button>
     
                
            </li>
        ))}
       </ul>
    </div>
    </>
  )
}

export default UseReduser

