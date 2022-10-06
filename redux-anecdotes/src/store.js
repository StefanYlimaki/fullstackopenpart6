
import anecdoteSlice from './reducers/anecdoteReducer'

const { configureStore } = require("@reduxjs/toolkit")

const store = configureStore({
    reducer: {
        anecdotes: anecdoteSlice
    }
})

console.log(store.getState())

export default store