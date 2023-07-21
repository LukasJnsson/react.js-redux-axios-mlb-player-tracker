
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../features/players/players.feature';
import useTitle from '../hooks/useTitle';
import Loading from '../components/default/Loading';
import PlayerSearch from '../components/player/PlayerSearch';
import Playercard from '../components/player/Playercard';


export default function Search() {
  useTitle('Player Search');

  const dispatch = useDispatch();
  const { players, isFetching } = useSelector((state) => state.players);
  const { player } = useSelector((state) => state.playerSearch);
  
  useEffect(() => {
    players ?? dispatch(fetchPlayers());
  }, [players, dispatch]);

  return (
    <div>
        {isFetching ? (
          <Loading size={'medium'} />
        ) : players.length > 0 ? (
          <PlayerSearch players={players} /> 
        ) : (!isFetching && <p className='not-found'>Could not find any players...</p>)}
        {player && (
          <div className='outer-player-card-player-search'>
            <Playercard player={player} />
          </div>
        )}
    </div>
  );
};