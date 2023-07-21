
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPlayer } from '../features/player/player.feature';
import useTitle from '../hooks/useTitle';
import Loading from '../components/default/Loading';
import PlayerProfile from '../components/player/PlayerProfile';


export default function Player() {
  useTitle('Player');

  const { id } = useParams();
  const dispatch = useDispatch();
  const { player, isFetching } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(fetchPlayer(String(id)));
  }, [dispatch, id]);

  return (
    <div>
      {isFetching ? (
        <Loading size={'medium'} />
      ) : player ? (<PlayerProfile player={player} />)
    : <p className='not-found'>Could not find player...</p>}
    </div>
  );
};