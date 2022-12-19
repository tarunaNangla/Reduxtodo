import * as types from "./todo.actionType";
import axios from "axios";

// http://localhost:8080/todos

export const getTodo=()=>(dispatch)=>{
    return axios.get("http://localhost:8080/todos").then((res)=>{
      dispatch({ 
        type:types.GET_TODO,
        payload:res.data 
      });
    });
  };


  export const addTodoAPI=(todo)=>(dispatch)=>{
  return axios.post("http://localhost:8080/todos",todo);
};    


export const deleteTodo = (id) => (dispatch)=>{
    return axios.delete(`http://localhost:8080/todos/${id}`);
  };
  
  export const editTodo=(id,todo)=>(dispatch)=>{
    return axios.patch(`http://localhost:8080/todos/${id}`,todo);
  };
  