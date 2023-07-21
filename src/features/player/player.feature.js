
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import checkFalsyObject from "../../utils/validation/checkFalsyObject.util.js";


/**
 * Function that fetch player
 * @async
 * @param {String} playerId - The player id
 * @returns {Object} - The player
 */
export const fetchPlayer = createAsyncThunk('player/fetch', async (playerId) => {
    try {
        const response = await axios.get(`https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=${playerId}`);
        const playerData = response.data.player_info.queryResults.row;

        const playerProps = {
            player_id: playerData.player_id,
            name_first: playerData.name_first,
            name_last: playerData.name_last,
            birth_country: playerData.birth_country,
            birth_city: playerData.birth_city,
            birth_state: playerData.birth_state,
            age: playerData.age,
            college: playerData.college,
            throws: playerData.throws,
            bats: playerData.bats,
            primary_position_txt: playerData.primary_position_txt,
            primary_stat_type: playerData.primary_stat_type,
            jersey_number: playerData.jersey_number,
            pro_debut_date: playerData.pro_debut_date,
            player_image: `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${playerData.player_id}/headshot/67/current`,
            player_profile: `https://www.mlb.com/player/${playerData.name_first}-${playerData.name_last}-${playerData.player_id}`.toLowerCase(),
            twitter_id: playerData.twitter_id,
            team_id: playerData.team_id,
            team_name: playerData.team_name,
            team_abbrev: playerData.team_abbrev,
            team_image: `https://www.mlbstatic.com/team-logos/team-cap-on-light/${playerData.team_id}.svg`
        };

        const player = checkFalsyObject(playerProps);
        return player;

    } catch (err) {
        return [];
    };
});


/* Player Slice */
export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        player: null,
        isFetching: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlayer.pending, (state) => {
            state.isFetching = true;
        })
        .addCase(fetchPlayer.fulfilled, (state, action) => {
            state.isFetching = false;
            state.player = action.payload;
        })
        .addCase(fetchPlayer.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.error.message;
        })
    }
});


export default playerSlice.reducer;