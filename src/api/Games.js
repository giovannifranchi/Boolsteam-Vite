import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const Games = {
    getAllgames: async ()=> {
        const response = await axios.get(baseUrl + '/games');
        return response.data;
    },

    getDiscountGames: async()=> {
        const response = await axios.get(baseUrl + '/games/discount');
        return response.data;
    },

    getHighlightedGame: async ()=> {
        const response = await axios.get(baseUrl + '/games/highlighted');
        return response.data;
    } 
}

export default Games;