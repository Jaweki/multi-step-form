import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfoStoreTypes } from '../types/type'

const initialState: UserInfoStoreTypes = {
    name: '',
    email: '',
    phone: ''
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        submit: (state, action: PayloadAction<UserInfoStoreTypes>) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
        }
    }
})

export default userInfoSlice.reducer
export const { submit } = userInfoSlice.actions