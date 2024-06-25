import { useContext } from "react";

import { ComentariosContext } from "../context/comentariosContext";
//* generamos un customhook para usar el context
export const useComentarios = () => useContext(ComentariosContext);