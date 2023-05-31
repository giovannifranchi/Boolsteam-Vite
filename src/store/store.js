import { createStore } from 'vuex';
import Games from '../api/Games';

const store = createStore({
    state: {
        games: {
            allGames: null,
            discountGames: null,
            highlightedGame: null,
        }
    },

    getters: {
        getAllGames(state){
            return state.games.allGames;
        },

        getDiscountGames(state){
            return state.games.discountGames;
        },

        getHighlightedGame(state){
            return state.games.highlightedGame;
        }
    },

    mutations: {

        setAllGames(state, value){
            state.games.allGames = value;
        },

        setDiscountGames(state, value){
            state.games.discountGames = value;
        },

        setHighlightedGame(state, value){
            state.games.highlightedGame = value;
        }
    },

    actions: {
        async fetchAllGames({commit}){
            const response =  await Games.getAllgames()
            commit('setAllGames', response);
        },

        async fetchDiscountGames({commit}){
            const response = await Games.getDiscountGames()
            commit('setDiscountGames', response);
        },

        async fetchHighlightedGame({commit}){
            const response = await Games.getHighlightedGame()
            commit('setHighlightedGame', response);
        }
    }
});

export default store;