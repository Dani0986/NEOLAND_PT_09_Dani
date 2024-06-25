import { useContext } from "react";

import { userContext } from "../context/userContext";

//* generamos un customhook para usar el context
export const useConductores = () => useContext(userContext);