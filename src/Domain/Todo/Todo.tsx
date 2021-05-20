import React from 'react';
import { Todo } from '../../utils/types';
import { todoValidationSchema } from '../../utils/schema';
import { useFormik } from 'formik';
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

        const completeChangeHandler = (id: string| number) => {
            const updatedTodo: Todo[] = todos.map((todo: Todo) => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed };
                
                return todo;      
            })

            setTodos(updatedTodo)   
    };
    
    const formik = useFormik({
      initialValues: {
        name: "",
        completed: false,
      },
      validationSchema: todoValidationSchema,
      onSubmit: (values, {resetForm}) => {
         let lastTodoId = todos.length;
         let lastTodo: Todo = {
           id: (lastTodoId += 1),
           name: values.name,
           completed: false,
         };

         let updateTodos = [...todos, lastTodo];
         setTodos(updateTodos);
        resetForm();
      },
    });
     
    return (
      <div style={{ margin: "30px", padding: "20px", background: "aqua" }}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="todo">Todo:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            >
            Add
          </button>
        </form>

        <TodoList todos={todos} onCompleteChange={completeChangeHandler} />
      </div>
    );
}

type ITodoListProp = {
  todos: Todo[];
  onCompleteChange: (id: string | number) => void;
};
const TodoList = ({ todos, onCompleteChange }: ITodoListProp) => {


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