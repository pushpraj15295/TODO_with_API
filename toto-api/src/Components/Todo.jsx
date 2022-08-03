import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {

    const [data,setData] = useState([]);

    const getdata = async ()=>{

          try{
               let data = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
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

  return (
    <div>
      <div style={{ border: "1px solid", margin: "8px", backgroundColor:"lightpink"}}>
        <h1>TODO APP</h1>
      </div>
      <div>
         <TodoList data={data}/>
      </div>
    </div>
  );
};

export default Todo;
