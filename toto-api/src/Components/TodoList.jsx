import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({data}) => {
  return (
    <div>
        {data.map((item)=> 
             <TodoItem key={item.id}
                       id={item.id}
                       title={item.title}
                       completed={item.completed}
                       />
        )}
    </div>
  )
}

export default TodoList