
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import checkFalsyObject from "../../utils/validation/checkFalsyObject.util.js";


/**
 * Function that fetch the MLB teams
 * @async
 * @param {String} season - The MLB season 
 * @returns {Array} - The array with the teams
 */
export const fetchTeams = async (season) => {
    try {
        const response = await axios.get(`https://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&season=${season}`);
        const teamsData = response.data.team_all_season.queryResults.row;

        const teams = [];

        for (let team = 0; team < teamsData.length; team++) {
            if (teamsData[team].division_id) {
                const teamProps = checkFalsyObject({
                    team_id: teamsData[team].team_id,
                    name_display_full: teamsData[team].name_display_full,
                    name_abbrev: teamsData[team].name_abbrev,
                    first_year_of_play: teamsData[team].first_year_of_play,
                    venue_name: teamsData[team].venue_name,
                    state: teamsData[team].state,
                    team_image: `https://www.mlbstatic.com/team-logos/team-cap-on-light/${teamsData[team].team_id}.svg`
                });
                teams.push(teamProps);
            };
        };
        return teams;

    } catch (err) {
        return [];
    };
};

/**
 * Function that fetch the MLB roster for a team
 * @async
 * @param {String} teamId - The MLB team id
 * @returns {Array} - The array with the roster
 */
export const fetchRosterByTeam = async (teamId) => {
    try {
        const response = await axios.get(`https://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=${teamId}`);
        const rosterData = response.data.roster_40.queryResults.row;

        const roster = [];
        
        for (let player = 0; player < rosterData.length; player++) {
            const playerProps = checkFalsyObject({
                player_id: rosterData[player].player_id,
                name_first: rosterData[player].name_first,
                name_last: rosterData[player].name_last,
                position_txt: rosterData[player].position_txt,
                bats: rosterData[player].bats,
                throws: rosterData[player].throws,
                jersey_number: rosterData[player].jersey_number,
                player_image: `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${rosterData[player].player_id}/headshot/67/current`,
                player_profile: `https://www.mlb.com/player/${rosterData[player].name_first}-${rosterData[player].name_last}-${rosterData[player].player_id}`.toLowerCase(),
                team_id: rosterData[player].team_id,
                team_name: rosterData[player].team_name,
                team_abbrev: rosterData[player].team_abbrev,
                team_image: `https://www.mlbstatic.com/team-logos/team-cap-on-light/${rosterData[player].team_id}.svg`
            });
            roster.push(playerProps);
        };
        return roster;

    } catch (err) {
        return [];
    };
};

/**
 * Function that fetch the MLB players
 * (The MLB API removed the endpoint for fetching all teams therefore this manual approach was conducted)
 * @async
 * @param {String} season - The MLB season 
 * @returns {Array} - The array with the MLB players
 */
export const fetchPlayers = createAsyncThunk('players/fetch', async () => {
    try {
        const teams = ['108', '109', '110', '111', '112', '113', '114', '115', '116', 
        '117', '118', '119', '120', '121', '133', '134', '135', '136' , '137', '138', 
        '139', '140', '141', '142', '143', '144', '145', '146', '147', '158'];

        const players = [];

        for (let i = 0; i < teams.length; i++) {
            const roster = await fetchRosterByTeam(teams[i]);
            players.push(...roster);
        };
        return players;

    } catch (err) {
        return [];
    };
});


/**
 * Players Slice
 */
export const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: null,
        isFetching: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlayers.pending, (state) => {
            state.isFetching = true;
        })
        .addCase(fetchPlayers.fulfilled, (state, action) => {
            state.isFetching = false;
            state.players = action.payload;
        })
        .addCase(fetchPlayers.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.error.message;
        })
    }
});


export default playersSlice.reducer;