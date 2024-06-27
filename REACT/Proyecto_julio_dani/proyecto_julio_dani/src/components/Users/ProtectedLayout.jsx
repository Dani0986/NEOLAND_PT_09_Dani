import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    console.log("no hay usuario logueado")
    return <Navigate to='/'/>;
  }

  return (
    <div>
      {outlet} 
    </div>
  );
};