import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CharacterCard } from "../index";
import { useCharacter } from "../../hooks/index";
import { InfoContext } from "../../context/index";
import { useContext } from "react";

export const CharacterList = () => {
  const { state } = useContext(InfoContext);
  console.log("state", state);
  const { useGetAllCharacter } = useCharacter();
  useGetAllCharacter();
  return (
    <Container maxWidth="xl">
      {/* Contenedor de la lista de athletes */}
      <Stack container spacing={2} justifyContent="flex-start">
        {state?.data?.map((character) => (
          <Stack item key={character.id} xs={6} sm={6} md={8} lg={12}>
            {/* Card del athlete */}
            <CharacterCard character={character} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};