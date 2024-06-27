


import {useForm} from "react-hook-form";
import {useAuth} from "../../hooks/index"



export const Form = ()=> {
  const {
    register,
    handleSubmit,
    formState:{ errors}
  } = useForm ();



const { login } = useAuth();

  const onSubmit = (data) =>{
    //Aqui procesamos los datos del formulario
    console.log("data", data);
    login(data);
  };



  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text"
          id="name"
          {...register("name", {
            required: "El nombre es obligatorio", 
            min: {
              value: 2,
              message: 'El nombre debe tener al menos dos caracteres'
            }
          }
        )} placeholder="Nombre"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      

      
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          {...register("email", {
            required: "El correo electronico es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de correo electrónico no válido",
            },
          })} placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input 
          type="text"
          id="password"
          {...register("password", {
            required: true, 
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: "Contraseña no válida",
            },

          }
        )} placeholder="Contraseña"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <button type='submit'>Submit</button>
      </form>
  )
}