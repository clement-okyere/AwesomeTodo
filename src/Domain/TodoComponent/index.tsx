import { Todo } from '../../utils/types';
import { todoValidationSchema } from '../../utils/schema';
import { useFormik } from 'formik';
import axios from "axios";
import SectionTitle from '../../Components/SectionTitle';
import { useEffect, useMemo, useState } from 'react';
import HorizontalSpace from '../../Components/Space/HorizontalSpace';
import { useTable } from 'react-table';
import Button from '../../Components/Button';
import styled from 'styled-components';

// const API_URL = "http://localhost:3001/api/todos";

// type todoState = {
//   todo: Todo[] | [],
//   loading: boolean
// };

// type INITIAL_LOAD = {
//   type: "INIT_LOAD";
// };

// type LOAD_DATA = {
//   type: "LOAD_DATA",
//   payload: todoState
// };

// type ADD_TODO = {
//   type: "ADD_TODO";
//   payload: todoState;
// };

// type DONE_LOAD = {
//   type: "DONE_LOAD";
// };

// type DELETE_TODO = {
//   type: "DELETE_TODO";
//   payload: todoState
// };

// type Action = INITIAL_LOAD
//               | LOAD_DATA
//               | DONE_LOAD
//               | ADD_TODO
//               | DELETE_TODO
              

// const reducer = (state: todoState, action: Action) => {
//   switch (action.type) {
//     case "INIT_LOAD":
//       return {
//         ...state,
//         loading: true,
//       };

//     case "LOAD_DATA":
//       console.log("data from api", action.payload);
//       return {
//         ...action.payload,
//         loading: true,
//       };

//     case "ADD_TODO":
//       console.log("data from api", action.payload);
//       return {
//         ...action.payload,
//       };

//     case "DONE_LOAD":
//       return {
//         ...state,
//         loading: false,
//       };

//     case "DELETE_TODO":
//       return {
//         ...state,
//         loading: false,
//       };
    
//     default:
//       throw new Error("wrong aurgument error");
//   }
// }

// const TodoComponent = () => {
//   let [todo, dispatch] = React.useReducer(reducer, {
//     todo: [],
//     loading: false,
//   });

//   const addTodoHandler = async (todoValue: Todo) => {

//     try {
//       const {data} = await axios.post(API_URL, todoValue);
//       console.log("response from api", data);
//       dispatch({
//         type: "ADD_TODO",
//         payload: {
//           "todo": [...todo.todo, todoValue],
//           loading: false
//         },
//       });    
//     }
//     catch (err) {
//       console.log("An error occurred", err);
//     }
//   }

//   const toggleTodoCompleteHandler = async (id: string) => {
//     try {
//       await axios.put(`${API_URL}/${id}/complete`);
//       //update state if successful
//       const updateTodos = todo.todo.map((elem: Todo) => {
//         if (elem.id === id)
//           return {
//             ...elem,
//             completed: !elem.completed
//           };
        
//         return elem;
//       })
//       dispatch({
//         type: "ADD_TODO",
//         payload: {
//           todo: updateTodos,
//           loading: false,
//         },
//       });
//     } catch (err) {
//       console.log("An error occurred", err);
//     }
//   };

//   const fetchTodos = async () => {
//     try {
//        dispatch({
//          type: "INIT_LOAD"
//        });     
//       const {data} = await axios.get(API_URL);
      
//       //update todoState with data from api
//       const todos: Todo[] = data.map((todo) => {
//         return {
//           completed: todo.completed,
//           name: todo.name,
//           id: todo._id
//         }
//       })

//        dispatch({
//          type: "LOAD_DATA",
//          payload: {
//            todo: todos,
//            loading: true
//          }
//        });    
 

//        dispatch({
//          type: "DONE_LOAD",
//        });
//     }
//     catch (err) {
//       dispatch({
//         type: "DONE_LOAD",
//       });
//       console.log("An error occurred", err);
//     }
//   }

//   React.useEffect(() => {
//     fetchTodos();
//   }, []);

    
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       completed: false,
//     },
//     validationSchema: todoValidationSchema,
//     onSubmit: async (values, { resetForm,setSubmitting }) => {
//       try {
//         setSubmitting(true)
//         const { name, completed } = values;
//         await addTodoHandler({ name, completed })
//         setSubmitting(false);
//         resetForm();
//       }
//       catch (err) {
//         setSubmitting(false);
//         console.log("err", err);
//       }
//     },
//   });
     
//   return (
//     <>
//       <div style={{ margin: "30px", padding: "20px", background: "aqua" }}>
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor="todo">Todo:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />

//           {formik.touched.name && formik.errors.name ? (
//             <div>{formik.errors.name}</div>
//           ) : null}

//           <button disabled={!(formik.isValid && formik.dirty)} type="submit">
//             Add {formik.isSubmitting ? " adding new todo..." : ""}
//           </button>
//         </form>

//         {todo.loading ? (
//           <span>Loading Todos.....</span>
//         ) : (
//           <TodoList
//             todos={todo.todo}
//             onCompleteChange={toggleTodoCompleteHandler}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// type ITodoListProp = {
//   todos: Todo[];
//   onCompleteChange: (id: string) => void;
// };
// const TodoList = ({ todos, onCompleteChange }: ITodoListProp) => {
//   return (
//     <>
//       {todos.length
//         ?
//          <div>
//       {todos.map((todo: Todo, index: any) => (
//         <TodoItem
//           key={index}
//           todo={todo}
//           onCompleteChange={() => onCompleteChange(todo.id as string)}
//         />
//       ))}
//         </div>
//         :
//         <span>No Todos at this time</span>
//        }
   
//       </>
//   );
// };


// type ITodoItemProp = {
//     todo: Todo
//     onCompleteChange: (id: string) => void
// }
// const TodoItem = ({ todo, onCompleteChange }: ITodoItemProp) => {
   
//   return (
//     <>
//       <div style={{ textDecorationLine: `${todo.completed ? "line-through" : "none"}`}}>
//         <span>{todo.name}</span>
//         <input
//           type="checkbox"
//           name="completionToggle"
//           checked={todo.completed}
//           onChange={() => onCompleteChange(todo.id as string)}
//         />
//       </div>
//       </>
//     );
// }

// export default TodoComponent;


type ITodoProps = {
  todos: Todo[] | []
}
const TodoTable = ({ todos }: ITodoProps) => {
  
   const data = useMemo<Todo[] | []>(() => todos, [todos]);

   const columns = useMemo<{Header: any, accessor: any}[]>(
     () => [
       {
         Header: "Id",
         accessor: "id",
       },
       {
         Header: "Name",
         accessor: "name",
       },
       {
         Header: "CreatedAt",
         accessor: "createdAt",
       },
       {
         Header: "Complete",
         accessor: "completed",
       },
     ],
     []
   );
  
     const {
       getTableProps,
       getTableBodyProps,
       headerGroups,
       rows,
       prepareRow,
  } = useTable({ columns, data });
  

   return (
     <table {...getTableProps()} style={{
      //  border: "solid 1px blue"
       width: "70%",
       borderCollapse: "collapse"
     }}>
       <thead>
         {headerGroups.map((headerGroup) => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map((column) => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   padding: "12px",
                   background: "black",
                   fontWeight: "bold",
                   textAlign: "left",
                   color: "white"
                 }}
               >
                 {column.render("Header")}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map((row) => {
           prepareRow(row);
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map((cell) => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: "12px",
                       textAlign: "left",
                       fontSize: "14px"
                     }}
                   >
                     {cell.render("Cell")}
                   </td>
                 );
               })}
             </tr>
           );
         })}
       </tbody>
     </table>
   );
}


const StyledAddTodoButton = styled(Button)`
    background: black;
    color: white;
    padding: 1em;
    border-radius: 4px;
    height: 3em;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const TodoComponent = () => {

  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_TODO_API}/todos`);
      console.log("data", data);

      setTodos(data);
      setLoading(false);
    }
    catch (err) {
      setLoading(false);
      console.log("An error occurred", err);
    }
   }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TitleWrapper>
        <SectionTitle title="Todos" />
        <StyledAddTodoButton>Add New Todo</StyledAddTodoButton>
      </TitleWrapper>
      <HorizontalSpace />

      <HorizontalSpace />
      <TodoTable todos={todos} />
    </>
  );
}
export default TodoComponent;