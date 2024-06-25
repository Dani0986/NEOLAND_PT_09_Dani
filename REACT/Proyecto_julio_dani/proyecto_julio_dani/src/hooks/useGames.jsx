import { useContext } from "react";

import { gamesContext } from "../context/gamesContext";

//* generamos un customhook para usar el context
export const useMultas = () => useContext(gamesContext);