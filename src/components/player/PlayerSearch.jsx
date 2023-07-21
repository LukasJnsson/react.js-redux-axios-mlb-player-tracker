
import React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { useDispatch } from 'react-redux';
import { setPlayer } from '../../features/Search/playerSearch.feature';


export default function PlayerSearch(props) {

  const dispatch = useDispatch();

  return (
    <div className='outer-player-search'>
        <Autocomplete className='inner-player-search' variant="plain" options={props.players}
        getOptionLabel={(player) => `${player.name_first} ${player.name_last} (${player.position_txt}) - ${player.team_name}`}
        placeholder="Player..." onChange={(event, player) => dispatch(setPlayer(player))} openOnFocus />
    </div>
  );
};