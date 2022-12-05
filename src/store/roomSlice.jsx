import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    room: [
      {
        id: 'Default',
        users: [],
        messages: [
          {
            user: '',
            message: ''
          }
        ]
      }
    ],
    searchValue: '',
    textInput: '' 
  },
  reducers: {

    setRoom(state, action) {
      console.log('state.room')
      //console.log(state.room)
      console.log(action.payload)
      console.log(...state.room)
      state.room = action.payload
    },  
    
    setMessage(state, action) {
      // console.log(current(state))
      // console.log(action)
      // state.room.map(room => console.log(room.id))
      // console.log(state.messageReceived)
      // state.room.map(room => console.log(room.messages.user))
      let indexOfRoom = state.room.findIndex(room => room.id == action.payload.room)
      const tempRoom = state.room
      tempRoom[indexOfRoom].messages.push({user:action.payload.user, message:action.payload.message})

      console.log(action.payload)
      state.room = tempRoom
      // let temp = state.room[0].messages.push(action.payload)
      // console.log(temp)
      // state.room[0].messages = temp
    },

    setIsLoading(state, action) {
      //console.log(action.payload)
      state.isLoading = action.payload
    },

    setIsError(state, action) {
      //console.log(action.payload)
      state.isError = action.payload
    },

    setError(state, action) {
      //console.log(action.payload)
      state.error = action.payload
    },

  }

});

export const roomActions = roomSlice.actions;

export default roomSlice;
