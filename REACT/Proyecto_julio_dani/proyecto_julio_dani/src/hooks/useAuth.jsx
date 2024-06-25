import { useContext } from "react";

import { AuthContext } from "../context/authcontext";

//* generamos un customhook para usar el context
export const useAuth = () => {
    //* esto es l oque haríamos en la página que se use, nos ahorramos este código
    return useContext(AuthContext)
};