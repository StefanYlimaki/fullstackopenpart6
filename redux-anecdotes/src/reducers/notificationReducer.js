import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            const newState = action.payload
            return newState
        }
    }
})


export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer