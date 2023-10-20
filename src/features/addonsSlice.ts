import { createSlice } from "@reduxjs/toolkit";
import { AddonsStoreTypes } from "../types/type";

const initialState: AddonsStoreTypes[] = [
    {id: 0, title: 'Online service', desc: 'Access to multiplayer games', mrate: 1, yrate: 10, selected: false },
    {id: 1, title: 'Larger storage', desc: 'Extra 1TB of cloud save', mrate: 2, yrate: 20, selected: false },
    {id: 2,title: 'Customizable profile', desc: 'Custom theme on your profile', mrate: 2, yrate: 20, selected: false },
]

const addonsSlice = createSlice({
    name: 'addons',
    initialState,
    reducers: {
        addonSelectionChange: (state, action) => {
            state[action.payload] = {...state[action.payload], selected: !state[action.payload].selected}
        }
    }
})

export default addonsSlice.reducer
export const { addonSelectionChange } = addonsSlice.actions