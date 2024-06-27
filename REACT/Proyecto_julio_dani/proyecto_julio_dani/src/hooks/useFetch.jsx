//Comunicar el front y el back para pedirle el listado

import { useState, useEffect, useContext } from "react";
import { InfoContext } from "../context/infoContext";

export const useFetch = (url) => {
  const { dispatch } = useContext(InfoContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("result",result);
        dispatch({ type: "SET_DATA", payload: result });
       
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fecthData();
  }, [url, dispatch]);


  return { loading, error };
};