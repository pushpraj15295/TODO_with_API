import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {

    const [data,setData] = useState([]);
    const [text,setText] = useState("");

    const getdata = async ()=>{

          try{
               let data = await fetch(`http://localhost:8080/posts?_page=1&_limit=50`)
               data = await data.json();
               setData(data);
              console.log(data)
          }
          catch(err){
            console.log(err)
          }
    }

    useEffect(()=>{
        getdata()
    },[])

    const handleNewTodo=() =>{
       const newtodo = {
          title:text,
          status:false
       }
       return fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newtodo)
    })
      .then((res) => res.json())
      .then((res) => {
        // setData(res);
        return getdata();
        
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  


  return (
    <div>
      <div style={{ border: "1px solid", margin: "8px", backgroundColor:"lightpink"}}>
        <h1>TODO APP</h1>
      </div>
      <div>
        <AddTodo handleNewTodo={handleNewTodo} text={text} setText={setText}/>
         <br />
         <TodoList data={data}/>
      </div>
    </div>
  );
};

export default Todo;
