//Utilizando useContext y useReducer cread una gestión de tareas, donde se pueda añadir una tarea a un estado global utilizando el context.
//La modificación tendrá que ser mediante una función reductora
//Deberéis definir un componente donde se consuma la informacion del context y se use la funcion reductora.

//Paso 1-3: Se crea un contexto para las tareas y se define un reducer para añadir nuevas tareas.
//Paso 4: AddTodo permite añadir nuevas tareas utilizando el método dispatch del contexto.
//Paso 5: TodoList muestra las tareas. 
/*
const TodoContext = createContext();

function todoReducer(params) {
  switch (UserActivation.type) {
    case 'add':
      return [...StaticRange, action.playload]
      default:
        return state;

  }
}

const todoProvider = ({children}) => {
  const [todos, dispatch] = useReducer()
}

function App() {
  const (count, setCount) = useState(0);
}

export default App
*/