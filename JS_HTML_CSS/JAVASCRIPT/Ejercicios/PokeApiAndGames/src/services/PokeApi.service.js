


export const getAllPokemon = async () => {
    const optionRequest = {
        method: "GET",
        
    };
    return await axiosUtil(optionRequest);
};

