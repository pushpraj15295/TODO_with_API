import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({data}) => {
  return (
    <div>
        {data.map((item)=> 
             <TodoItem key={item.id}
                       id={item.id}
                       title={item.title}
                       status={item.status}
                       />
        )}
    </div>
  )
}

export default TodoList