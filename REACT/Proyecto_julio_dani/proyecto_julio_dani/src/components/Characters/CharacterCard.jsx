// CharacterCard.jsx

import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { ThemeProvider } from '@mui/system';
import { BaseTheme } from "../../themes/base";
import { NavLink } from "react-router-dom";

export const CharacterCard = ({ character }) => {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Card
        sx={{
          display: 'flex',
          height: "180px",
          width: "95vh",
          borderRadius: "40px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "0.3s ease-in-out",
          "&:hover": { boxShadow: "0 20px 20px rgba(0,0,0,0.2)" },
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: "40px 0 0 40px" }}>
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography gutterBottom variant="h3" component="div" noWrap>
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">Año Nacimiento: {character.year}</Typography>
            <Typography variant="body2" color="text.secondary">Género: {character.gender}</Typography>
            <Typography variant="body2" color="text.secondary">País: {character.country}</Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '20%', alignItems: 'center', justifyContent: 'center', display: "flex", flexDirection: 'column', padding: 2 }}>
          <NavLink to={`/sport/${character.sports[0]}`}>
            <Button variant="contained" size="large" color="secondary" sx={{ width: '100px', height: '100px', borderRadius: '50px', marginBottom: 2, fontWeight: 'bold' }}>{character.sports}</Button>
          </NavLink>
          <NavLink to={`/comments/${character.comments}`}>
            <Button variant="contained" size="small" color="primary">Comentarios</Button>
          </NavLink>
        </Box>
      </Card>
    </ThemeProvider>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    sports: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};
