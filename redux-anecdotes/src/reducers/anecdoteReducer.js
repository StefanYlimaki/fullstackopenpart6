import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes', 
  initialState: [],
  reducers: {
    vote(state, action) {
      const idOfAnecdote = action.payload
      const changedAnecdote = state.find(n => n.id === idOfAnecdote)
      changedAnecdote.votes += 1
      return state
    },
    createAnecdote(state, action) {
      return state.concat(action.payload)
    }, 
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { vote, createAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer