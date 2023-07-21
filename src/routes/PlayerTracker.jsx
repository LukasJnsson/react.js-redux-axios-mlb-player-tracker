
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/default/Header';
import Home from './Home';
import Players from './Players';
import Player from './Player';
import Search from './Search';
import NotFound from './NotFound';


export default function PlayerTracker() {
  return (
    <div>
        <BrowserRouter>
            <Header />
                <div>
                    <Routes>
                        <Route index exact path='/' element={<Home />} />
                        <Route path='/mlb/players' element={<Players />} />
                        <Route path='/mlb/players/search' element={<Search />} />
                        <Route path='/mlb/players/:id' element={<Player />} />
                        <Route path='/*' element={<NotFound />} />
                    </Routes>
                </div>
        </BrowserRouter>
    </div>
  );
};