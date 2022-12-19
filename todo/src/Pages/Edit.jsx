import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editTodo, getTodo } from '../Redux/Todo/todo.action';

const Edit = () => {
    let {id}=useParams();
    const navigate=useNavigate();

    const [editname,setEditName]=useState("");
    const [editage,setEditAge]=useState("");
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todo);

    const handleNav = () => {
        navigate("/");
      };
    

      const handleEditTodo = () => {
        let newEditedTodo = {
          name: editname,
          age: editage,
        };
        dispatch(editTodo(id, newEditedTodo)).then((res) => {
          dispatch(getTodo());
        });
      };
    

      useEffect(()=>{
        dispatch(getTodo())
      },[dispatch])
  return (
    <div>
      edit

<br />
      <input type="text"
       value={editname} placeholder="Edit Name"
       onChange={(e) => setEditName(e.target.value)}
       />
<br />    
      <input type="text"
       value={editage}  placeholder="Edit Age"
       onChange={(e) => setEditAge(e.target.value)}
       />
       <br />
       <button onClick={handleEditTodo}>Edit</button>
       <button onClick={handleNav}>Go Home page</button>
    </div>
  )
}

export default Edit
