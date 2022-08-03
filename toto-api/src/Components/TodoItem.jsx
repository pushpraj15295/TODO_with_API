import React from 'react'

const TodoItem = ({id,title,completed}) => {


  


  return (
    <div style={{border: '1px solid',display: 'flex',width:"60%",gap:"1rem",margin:"auto" ,padding:"15px",justifyContent:"space-between" , backgroundColor:"grey"}}>
           
           <div style={{width:"50%"}}>{title}</div>
          <div style={{display:"flex",justifyContent:"space-between",widht:"50%"}}>

          <div>
             <button >
                {completed===true ? " COMPLETED" : "NOT COMPLETED"}
             </button>
          </div>
          <div><button>Toggle</button></div>
          <div><button>DELETE</button></div>

          </div>
    </div>
  )
}

export default TodoItem