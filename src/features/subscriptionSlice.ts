import { createSlice } from "@reduxjs/toolkit";
import { SubscriptionStoreTypes } from "../types/type";

const initialState: SubscriptionStoreTypes = {
    type: 'monthly'
}

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        changeSubscription: (state) =>  {
            if (state.type == 'monthly') {
                state.type = 'yearly'
            } else if (state.type == 'yearly') {
                state.type = 'monthly'
            }
        }
    }
})

export default subscriptionSlice.reducer
export const { changeSubscription } = subscriptionSlice.actions