import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./user.types";

const initialState:IUser[] = []

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setNumbersArray(state, action:PayloadAction<IUser>) {
            state.push(action.payload)
        }
    }

})