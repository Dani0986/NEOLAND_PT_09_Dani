import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { GamesCard } from "../index";
import { InfoContext } from "../../context/index";
import { useGames } from "../../hooks/index";

export const GamestList = () => {
  const { state } = useContext(InfoContext);
  const { useGetAllGames } = useGames();
  useGetAllGames();
  return (
    <Container maxWidth="xl">
      {/* Contenedor de la lista de athletes */}
      <Stack container spacing={2} justifyContent="flex-start">
        {state?.data?.map((games) => (
          <Stack item key={games.id} xs={6} sm={6} md={8} lg={12}>
            {/* Card del athlete */}
            <GamesCard sport={games} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};