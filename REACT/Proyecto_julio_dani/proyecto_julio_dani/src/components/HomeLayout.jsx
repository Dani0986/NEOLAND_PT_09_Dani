
//*autorización  CUSTOM HOOK
import { useAuth } from "../hooks/useAuth";
//* Importamos el hook useoutlet y el navigate
import { Navigate, useOutlet } from "react-router-dom";


//* ESTO LO USAREMOS COMO HOME, AL ABRI, QUE ENVUELVE AL RESTO DE PÁGINAS
export const HomeLayout = () => {
  //* extraemos el valor del usuario del contexto
  const { user } = useAuth();
//* El hook de react router DOM que nos permite meter las páginas anidadas después
  const outlet = useOutlet();
//* si hay datos en el valor usuario, hacemos un navigate a su perfil
  if (user) {return <Navigate to='/autorizado/home' replace />}

  return (
    <div>
            {/* / la barra escomún a todos */}
{/* //* un array de rutas tipo objeto que tendrá su dirección y su label */}
  
       {/* //* aquí la página  que quieras renderizara través del outlet.
      //* esto es diferente al browserouter, el browserouter te hace el enrutado
      //* de los path y el outlet lo que hace es pintarte para página después de lo de arriba */}
      {outlet}
    </div>
  );
};