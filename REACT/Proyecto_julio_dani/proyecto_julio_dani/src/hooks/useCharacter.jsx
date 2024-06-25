import { useContext } from "react";

import { CharacterContext } from "../context/characterContext";
//* generamos un customhook para usar el context
export const useCharacter = () => useContext(CharacterContext);