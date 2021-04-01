import api from "./marvel-api"




export default {
    getCharacters() {
        return api.get('/characters');

    },
    getComics() {
        return api.get('/comics');

    }
}