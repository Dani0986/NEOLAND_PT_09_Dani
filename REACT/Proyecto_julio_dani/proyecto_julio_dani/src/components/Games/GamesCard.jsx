import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
  } from "@mui/material";
  import { ThemeProvider } from "@mui/system";
  import { BaseTheme } from "../../themes/base";
  import PropTypes from "prop-types";
  
  export const GamesCard = ({ games }) => {
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
          {/* Imagen del juego */}
          <Box
            sx={{
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: "40px 0 0 40px",
            }}
          >
            <CardMedia
              component="img"
              image={games.image}
              alt={games.name}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
  
          {/* Información del juego */}
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 2,
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Typography gutterBottom variant="h3" component="div" noWrap>
                {games.name}
              </Typography>
  
              <Typography variant="body2" color="text.secondary">
                Olímpico
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Modalidades: {games.modalidades}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                más
              </Typography>
            </CardContent>
          </Box>
  
          {/* Botones */}
          <Box
            sx={{
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              display: "flex",
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50px',
                marginBottom: 2,
                fontWeight: 'bold',
              }}
            >
              {games.character}
            </Button>
            <Button variant="contained" size="small" color="primary">
              Comentarios
            </Button>
          </Box>
        </Card>
      </ThemeProvider>
    );
  };
  
  GamesCard.propTypes = {
    games: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      modalidades: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired,
  };
  