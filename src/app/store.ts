import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer  from '../features/userInfoSlice'
import navigationReducer from "../features/navigationSlice";
import planSelectionReducer from "../features/planSelectionSlice";
import subscriptionReducer from "../features/subscriptionSlice";
import addonsReducer from "../features/addonsSlice";

const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        navigation: navigationReducer,
        planSelection: planSelectionReducer,
        subscription: subscriptionReducer,
        addons: addonsReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch