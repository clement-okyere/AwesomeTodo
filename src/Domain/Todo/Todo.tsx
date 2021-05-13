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
    let [todos, setTodos] = React.useState<Todo[] | []>(initial_todos);
    let [newTodo, setNewTodo] = React.useState<string>("");

        const completeChangeHandler = (id: string| number) => {
            const updatedTodo: Todo[] = todos.map((todo: Todo) => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed };
                
                return todo;      
            })

            setTodos(updatedTodo)   
    };
    
    const todoInputChangehandler = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setNewTodo(e.target.value);
    }

    const addTodohandler = (e: React.FormEvent<HTMLInputElement>) => {
        let lastTodoId = todos.length;
         let lastTodo: Todo = {
             id: lastTodoId += 1,
             name: newTodo,
             completed: false
         }
         
        let updateTodos = [...todos, lastTodo]
        setTodos(updateTodos);
        setNewTodo("");
     };

     
    return (
        <div style={{ margin: "30px", padding: "20px", background: "aqua" }}>
            <label htmlFor="todo">Todo:</label>
            <input type="text" id="todo" onChange={todoInputChangehandler} />
            <button type="button" onClick={addTodohandler}>Add</button>

        <TodoList todos={todos} onCompleteChange={completeChangeHandler} />
      </div>
    );
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
      <div style={{ textDecorationLine: `${todo.completed ? "line-through" : "none"}`}}>
        <span>{todo.name}</span>
        <input
          type="checkbox"
          name="completionToggle"
          checked={todo.completed}
          onChange={() => onCompleteChange(todo.id)}
        />
      </div>
    );
}

export default TodoComponent;