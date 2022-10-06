import anecdoteSlice from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationSlice from './reducers/notificationReducer'

const { configureStore } = require("@reduxjs/toolkit")

const store = configureStore({
    reducer: {
        anecdotes: anecdoteSlice,
        notifications: notificationSlice,
        filter: filterReducer
    }
})

export default store