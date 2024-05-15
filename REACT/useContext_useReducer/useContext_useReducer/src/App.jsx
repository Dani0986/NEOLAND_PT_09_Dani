//Utilizando useContext y useReducer cread una gestión de tareas, donde se pueda añadir una tarea a un estado global utilizando el context.
//La modificación tendrá que ser mediante una función reductora
//Deberéis definir un componente donde se consuma la informacion del context y se use la funcion reductora.

//Paso 1-3: Se crea un contexto para las tareas y se define un reducer para añadir nuevas tareas.
//Paso 4: AddTodo permite añadir nuevas tareas utilizando el método dispatch del contexto.
//Paso 5: TodoList muestra las tareas. 

import  { createContext, useContext, useReducer,  } from 'react';
import PropTypes from 'prop-types';

const TodoContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    default:
      return state;
  }
}

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);

  const addToTask = () => {
    dispatch({ type: 'add', payload: 'Nueva Tarea' });
  };

  return <button onClick={addToTask}>Agregar Tarea</button>;
};

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

function App() {
  

  return (
    <TodoProvider>
      <div>
        <h1>Lista de Tareas</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;