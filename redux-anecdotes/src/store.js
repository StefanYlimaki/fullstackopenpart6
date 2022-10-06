
import anecdoteSlice from './reducers/anecdoteReducer'
import notificationSlice from './reducers/notificationReducer'

const { configureStore } = require("@reduxjs/toolkit")

const store = configureStore({
    reducer: {
        anecdotes: anecdoteSlice,
        notifications: notificationSlice
    }
})

console.log(store.getState())

export default store