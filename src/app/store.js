
import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/players.feature.js";
import playerReducer from "../features/player/player.feature.js";
import playerSearchReducer from "../features/Search/playerSearch.feature.js";


export default configureStore({
    reducer: {
        players: playersReducer,
        player: playerReducer,
        playerSearch: playerSearchReducer
    }
});