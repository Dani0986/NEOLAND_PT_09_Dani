import { axiosUtil } from "../utils/axios";

export const getAllRick = async () => {
  const optionRequest = {
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
  };

  return await axiosUtil(optionRequest);
};

