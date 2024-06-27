import { useFetch } from "./index.jsx"

export const useGames = () => {
    const useGetAllGames = async ()=>{
        useFetch("http://localhost:8080/api/v1/games/getAllGames")
    }
    console.log("AllGames", useGetAllGames)
  return {useGetAllGames}
  }