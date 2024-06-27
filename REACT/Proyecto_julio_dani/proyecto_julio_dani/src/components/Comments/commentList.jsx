import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CommentCard } from "../index";
import { useComments } from "../../hooks/index";
import { InfoContext } from "../../context/index";
import { useContext } from "react";

export const CommentsList = () => {
  const { state } = useContext(InfoContext);
  console.log("state", state);
  const { useGetAllComments } = useComments();
  useGetAllComments();
  return (
    <Container maxWidth="xl">
      {/* Contenedor de la lista de athletes */}
      <Stack container spacing={2} justifyContent="flex-start">
        {state?.data?.map((comment) => (
          <Stack item key={comment.id} xs={6} sm={6} md={8} lg={12}>
            {/* Card del athlete */}
            <CommentCard comment={comment} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};