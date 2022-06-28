import React from 'react'

const TodoItem = ({id,title,completed}) => {


  


  return (
    <div style={{border: '1px solid',display: 'flex',gap:"1rem",margin:"8px" ,padding:"15px",justifyContent:"space-between" , backgroundColor:"grey"}}>
           
           <div>{title}</div>
          <div>
             <button >
                {completed===true ? " COMPLETED" : "NOT COMPLETED"}
             </button>
          </div>
    </div>
  )
}

export default TodoItem