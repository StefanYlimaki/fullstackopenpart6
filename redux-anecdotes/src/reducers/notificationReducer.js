import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: '',
    reducers: {
        setNewNotification(state, action) {
            const newState = action.payload
            return newState
        }
    }
})

export const { setNewNotification } = notificationSlice.actions

export const setNotification = (message, length) => {
    return async dispatch => {
        dispatch(setNewNotification(message))
        setTimeout(() => {
            dispatch(setNewNotification(''))
        }, length * 1000)
    }

}

export default notificationSlice.reducer