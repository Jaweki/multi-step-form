import { createSlice } from "@reduxjs/toolkit";
import { PlanSelectionStoreTypes } from "../types/type";

const initialState: PlanSelectionStoreTypes[] = [
    {type: "Arcade", mrate: 9, yrate: 90, discount: 2, selected: true},
    {type: "Advanced", mrate: 12, yrate: 120, discount: 2, selected: false},
    {type: "Pro", mrate: 15, yrate: 150, discount: 2, selected: false},
]

const planSelectionSlice = createSlice({
    name: 'planSelection',
    initialState,
    reducers: {
        changeSelection: (state, action) => {
            if (action.payload == 0) {
                state[0] = {type: "Arcade", mrate: 9, yrate: 90, discount: 2, selected: true}
                state[1] = {type: "Advanced", mrate: 12, yrate: 120, discount: 2, selected: false}
                state[2] = {type: "Pro", mrate: 15, yrate: 150, discount: 2, selected: false}
            } else if (action.payload == 1) {
                state[0] = {type: "Arcade", mrate: 9, yrate: 90, discount: 2, selected: false}
                state[1] = {type: "Advanced", mrate: 12, yrate: 120, discount: 2, selected: true}
                state[2] = {type: "Pro", mrate: 15, yrate: 150, discount: 2, selected: false}
            } else if (action.payload == 2) {
                state[0] = {type: "Arcade", mrate: 9, yrate: 90, discount: 2, selected: false}
                state[1] = {type: "Advanced", mrate: 12, yrate: 120, discount: 2, selected: false}
                state[2] = {type: "Pro", mrate: 15, yrate: 150, discount: 2, selected: true}
            }
        },
    },
});


export default planSelectionSlice.reducer
export const { changeSelection } = planSelectionSlice.actions