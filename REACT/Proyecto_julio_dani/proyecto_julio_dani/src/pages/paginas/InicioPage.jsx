import { Link } from 'react-router-dom'; 

export const InicioPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "75px" }}>
      <div id="logoentrada">
        <img src="" alt="Captura de pantalla" style={{ width: "150px", height: "150px" }} />
      </div>
      <p id="tituloinicio" style={{ fontSize: "24px", fontWeight: "bold" }}>misJuegos</p>
      <span style={{ fontSize: "18px" }}>
        <Link to="/login" style={{ marginRight: "8px" }}>Inicia sesión</Link> o
      </span>
      <p style={{ fontSize: "18px" }}>
        <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  );
};
