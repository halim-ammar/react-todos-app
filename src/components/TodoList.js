import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <div>
      {props.list.map((i) => (
        <TodoItem todo={i} removeTodo={props.removeTodo} />
      ))}
    </div>
  );
}
