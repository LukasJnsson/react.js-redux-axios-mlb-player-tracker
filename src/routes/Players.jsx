
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../features/players/players.feature';
import useTitle from '../hooks/useTitle';
import Loading from '../components/default/Loading';
import Playercard from '../components/player/Playercard';


export default function Players() {
  useTitle('Players');

  const dispatch = useDispatch();
  const { players, isFetching } = useSelector((state) => state.players);

  useEffect(() => {
    players ?? dispatch(fetchPlayers());
  }, [players, dispatch]);

  return (
    <div className='outer-player-cards'>
      {isFetching ? (
        <Loading size={'medium'} />
      ) : players.length > 0 ? (
        players.map((player) => (
          <Playercard key={player.player_id} player={player} />
        ))) : (!isFetching && <p className='not-found'>Could not find any players...</p>)}
    </div>
  );
};