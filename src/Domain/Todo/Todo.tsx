import React from 'react';
import {Todo } from '../../utils/types'

let initial_todos: Todo[] = [
    {
    name: "make coffe",
    completed: false,
  },
  {
    name: "walk home",
    completed: true,
  },
];

const TodoComponent = () => {
    let [todos, setTodos] = React.useState<Todo[]>(initial_todos);

     
    return (
        <div style={{ margin: "30px", padding: "20px", background: "aqua"}}>
            <TodoList todos = {todos} />
        </div>
    )
}

type ITodoListProp = {
    todos: Todo[]
}
const TodoList = ({ todos }: ITodoListProp) => {
  console.log("Todo list props", todos);

  return (
    <div>
      {todos.map((todo: Todo, index: any) => (
          <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};


type ITodoItemProp = {
    todo: Todo
}
const TodoItem = ({todo}: ITodoItemProp) => (
    <div>
        <span>{todo.name}</span>
        <input type="checkbox" checked={todo.completed} />
    </div>
)

export default TodoComponent;