import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Start, Lobby, Game } from './pages'


import './App.css';
import "nes.css/css/nes.min.css";


// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");


import { Difficulty, Category, Leaderboard, LobbyCode } from './components'

function App() {

  

  // useEffect(() => {
  //   console.log(roomsArray)

  // }, [roomsArray])

return (
     <Routes>
     <Route path="/" element={<Start/>}></Route>
     <Route path="/joinorcreate" element={<LobbyCode/>}></Route>
     <Route path="/lobby" element={<Lobby/>}></Route>

     <Route path='/lobby/:id' element={<LobbyCode/>}/>
     <Route path='/startgame' element={<Game />} />
      <Route path='/leaderboard' element={<Leaderboard /> } />
     </Routes>

)}


export default App;
