import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAPI, deleteTodo, getTodo } from '../Redux/Todo/todo.action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const {todos}=useSelector((state)=>state.todo);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleAddTodo=()=>{
        const todo={
            id:Date.now(),
            name:name,
            age:age,
        };
        console.log(todo)
        dispatch(addTodoAPI(todo)).then((res)=>{
            dispatch(getTodo());
        })
    }

    const handleDeleteTodo=(id)=>{
        dispatch(deleteTodo(id)).then((res)=>{
         dispatch(getTodo()).then(res);
        })
     }
 
     const handleEditTodo=(id)=>{
         navigate(`/${id}`)
     }

    useEffect(()=>{
        dispatch(getTodo())
    },[dispatch])

  return (
    <div>
        <h1>Enter Data</h1>
        
        <div>
           Enter Name: <input type="text"  value={name}
           onChange={(ele)=>{setName(ele.target.value)}}/>
        </div>
        <div>
           Enter Age: <input type="Number"  value={age}
            onChange={(ele)=>{setAge(ele.target.value)}}/>
        </div>
      
      <button onClick={handleAddTodo}>Add Data</button>
    

        <br />
         <h1>Entered Data</h1>
         
         {todos.map((ele)=>{
            return(
                <div key={ele.id} style={{display:"flex", gap:"40px", marginLeft:"25%"}}>
               
                  
                    <h1>{ele.name}</h1>
                    <h1>{ele.age}</h1>
                   
                    <button style={{height:"40px",border:"1px solid black", borderRadius:"50px", width:"200px"}} onClick={() => handleEditTodo(ele.id)}>Edit</button>
                    <button style={{height:"40px",border:"1px solid black", borderRadius:"50px", width:"200px"}}  onClick={() => handleDeleteTodo(ele.id)}>Delete</button>
                  
                </div>    
            )
         })}
    </div>
  )
}

export default Input
