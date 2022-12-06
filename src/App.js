import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Start, CreateLobby, Game } from './pages'


import './App.css';
import "nes.css/css/nes.min.css";


// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");


import { Difficulty, Category, Leaderboard, LobbyCode } from './components'

function App() {

  

return (
     <Routes>
     <Route path="/" element={<Start/>}></Route>
     <Route path="/createlobby" element={<CreateLobby/>}></Route>
     <Route path="/lobby" element={<LobbyCode/>}></Route>
     <Route path="/lobby/:lobbyId" element={<Game></Game>}></Route>

     <Route path='/startgame' element={<Game />} />
      <Route path='/leaderboard' element={<Leaderboard /> } />
     </Routes>

)}


export default App;
