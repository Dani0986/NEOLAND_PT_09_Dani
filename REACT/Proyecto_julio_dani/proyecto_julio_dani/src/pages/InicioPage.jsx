import { Link } from 'react-router-dom'; 



export const InicioPage = () => {
  return (
    <body>
  <div id="logoentrada" style={{ marginTop: "75px " }}>
        <img src="https://res.cloudinary.com/dx8p4o1ak/image/upload/v1718014262/ENTREGA_MARZO/Captura_de_pantalla_2024-06-07_201352_u5tiog.png" alt="Captura de pantalla"></img>
    </div>
    <p id="tituloinicio">mitráfico</p>
    {/* uso span para agrupar el link y el o */}
    <span>
          <Link to="/login">inicia sesión</Link> o
        </span>
     <p>
        <Link to="/registro">regístrate</Link> </p>
    
     </body>
    
  );
};