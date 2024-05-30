/* eslint-disable react/display-name */
// Tenemos un HOC que al ser invocado hace un log con el nombre del componente
const WithComponentNameLog = (Component) => {
    console.log("HOC invocado con el componente:", Component.name);
  
    return (props) => {
      return <Component {...props} />;
    };
  };
  
  export default WithComponentNameLog;
  