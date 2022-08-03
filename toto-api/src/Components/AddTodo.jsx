import React from 'react'

const AddTodo = ({text,setText,handleNewTodo}) => {
  return (
    <div>

          <input type="text" placeholder='add something' onChange={(e)=> setText(e.target.value)} />
          <button onClick={()=>handleNewTodo(text)}>Add</button>
    </div>
  )
}

export default AddTodo