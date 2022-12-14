import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { usersActions } from '../../store/usersSlice';
import { gamesActions } from "../../store/store";
import { roomActions } from "../../store/roomSlice";
import useUserStatus from "../../hooks/useUserStatus";
import { socket } from "../../hooks/socket";
import Ready from "../../components/Ready";
import GameCard from "../GameCard";
import ShowWinner from "../../components/ShowWinner";
import Count from "../../components/Count";
import './index.css';
import { Rockets } from '../../components'

const Game = () => {
    const location = useLocation()
    const navigate = useNavigate('/lobby')
    const { userId } = location.state;
    const dispatch = useDispatch();
    const [start, setStart] = useState(false)
    const [wait, setWaiting] = useState(false)
    const [end, setEnd] = useState(false)
    const { id } = useParams()
    const userArray = useSelector(state => state.user.users)
    const roomsArray = useSelector(state => state.room.room)
    console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == id)
    console.log(indexOfRoom)
    let gameArray = roomsArray[indexOfRoom].game.map((q, index) => {
        return <GameCard data={q} id={id} userId={userId} username={'dd'} key={index} />
    })
    console.log(userId)
    const indexOfUser = roomsArray[indexOfRoom].users.findIndex(user => user.name == userId)
    //console.log(currentGame[findIndex].users)
    //console.log(findIndexUser)
    function win(data) {
        return (
            <>
                <p>{data.name}</p>
                <p>Score: {data.score}</p>

            </>
        )
    }
    useEffect(() => {
        if (roomsArray[indexOfRoom].game.length == 0) setEnd(true)
        else {
            if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
                console.log('Start Game')
                setStart(true)
            }
            if (roomsArray[indexOfRoom].game[0].answered.includes(userId) && (roomsArray[indexOfRoom].game[0].length != roomsArray[indexOfRoom].users.length)) {
                setWaiting(true)
            }
            else setWaiting(false)
        }



    }, [roomsArray[indexOfRoom].users])
    return <div>{
        end ?
            <div id="gameend">
                <h1>Lobby Leaderboard</h1>
                <div id="endcontent">
                    <ShowWinner data={roomsArray[indexOfRoom].users} />
                    <button className="nes-btn is-primary" onClick={() => navigate('/lobby')}>Back to Lobby</button>
                </div>
            </div>

            : start
                ? wait
                    ? <h1>Waiting for other players</h1>
                    : <>
                        <h1>Quizcade</h1>
                        <p id="usernametitle">Username: {userArray.filter(obj => obj.id == userId)[0].name}</p>
                        <p id="scorecount">Score: {roomsArray[indexOfRoom].users[indexOfUser].score}</p>
                        <Count />
                        <div className="choices">
                            <div>{gameArray.length > 0 && gameArray[0]}</div>
                        </div>
                        <Rockets /> </>
                : <Ready start={start} setStart={setStart} />}

    </div>
}
export default Game; 