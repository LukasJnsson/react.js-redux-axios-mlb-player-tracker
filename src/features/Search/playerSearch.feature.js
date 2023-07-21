
import { createSlice } from "@reduxjs/toolkit";


/* Player Search Slice */
export const playerSearchSlice = createSlice({
    name: 'playerSearch',
    initialState: {
        player: null
    },
    reducers: {
        setPlayer: (state, action) => {
            state.player = action.payload;
        }
    }
});


export const { setPlayer } = playerSearchSlice.actions;
export default playerSearchSlice.reducer;