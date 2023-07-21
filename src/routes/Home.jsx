
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../features/players/players.feature';
import useTitle from '../hooks/useTitle';
import Loading from '../components/default/Loading';
import PlayerTable from '../components/player/PlayerTable';


export default function Home() {
  useTitle('Home');

  const dispatch = useDispatch();
  const { players, isFetching } = useSelector((state) => state.players);

  useEffect(() => {
    players ?? dispatch(fetchPlayers());
  }, [players, dispatch]);

  return (
    <div>
      {isFetching ? ( <Loading size={'medium'} /> ) 
      : players.length > 0 ? (
        <PlayerTable players={players} />
      ) : <p className='not-found'>Could not find any players...</p>}
    </div>
  );
};