import React from 'react';
import {Todo } from '../../utils/types'

let initial_todos: Todo[] = [
    {
    name: "make coffe",
    completed: false,
  },
  {
    name: "walk home",
    completed: false,
  },
];

const TodoComponent = () => {
    let [todos, setTodos] = React.useState<Todo[] | []>(initial_todos);

        const completeChangeHandler = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          console.log(e.target.name);
        };

     
    return (
        <div style={{ margin: "30px", padding: "20px", background: "aqua"}}>
            <TodoList
                todos={todos}
                onCompleteChange={completeChangeHandler}
            />
        </div>
    )
}

type ITodoListProp = {
  todos: Todo[];
  onCompleteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const TodoList = ({ todos, onCompleteChange }: ITodoListProp) => {
  console.log("Todo list props", todos);

  return (
    <div>
      {todos.map((todo: Todo, index: any) => (
        <TodoItem
          key={index}
          todo={todo}
          onCompleteChange={onCompleteChange}
        />
      ))}
    </div>
  );
};


type ITodoItemProp = {
    todo: Todo
    onCompleteChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const TodoItem = ({ todo, onCompleteChange }: ITodoItemProp) => {

    return (
        <div>
            <span>{todo.name}</span>
            <input
                type="checkbox"
                name="completionToggle"
                checked={todo.completed}
                onChange={onCompleteChange}
            />
        </div>
    )
}

export default TodoComponent;