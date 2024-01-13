import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userName,
    fullName,
    email,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserName:(action, payload)=>{
            const {userName} = action.payload;
            state.userName = userName;
        },
        setFullName:(action, payload)=>{
            const {fullName} = action.payload;
            state.fullName = fullName;
        },
        setEmail:(action, payload)=>{
            const {email} = action.payload;
            state.email = email;
        }
    }
})