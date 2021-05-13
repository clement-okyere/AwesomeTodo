import React from 'react';
import { Todo } from '../../utils/types';
//import { uuid } from "uuidv4";

let initial_todos: Todo[] = [
    {
    id: 0,
    name: "make coffe",
    completed: false,
  },
    {
    id: 1,
    name: "walk home",
    completed: false,
  },
];

const TodoComponent = () => {
    let [todos, setTodos] = React.useState<Todo[]>(initial_todos);

        const completeChangeHandler = (id: string| number) => {
            const updatedTodo: Todo[] = todos.map((todo: Todo) => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed };
                
                return todo;      
            })

            setTodos(updatedTodo)   
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
  onCompleteChange: (id: string | number) => void;
};
const TodoList = ({ todos, onCompleteChange }: ITodoListProp) => {
  console.log("Todo list props", todos);

  return (
    <div>
      {todos.map((todo: Todo, index: any) => (
        <TodoItem
          key={index}
          todo={todo}
          onCompleteChange={() => onCompleteChange(todo.id)}
        />
      ))}
    </div>
  );
};


type ITodoItemProp = {
    todo: Todo
    onCompleteChange: (id: string | number) => void
}
const TodoItem = ({ todo, onCompleteChange }: ITodoItemProp) => {

    return (
        <div>
            <span>{todo.name}</span>
            <input
                type="checkbox"
                name="completionToggle"
                checked={todo.completed}
                onChange={() => onCompleteChange(todo.id)}
            />
        </div>
    )
}

export default TodoComponent;