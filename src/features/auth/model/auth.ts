import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import registeredUsers from "./registered_users.json";

const initialState = {
    isAuth: localStorage.getItem("isAuth") === "true" ? true : false,   
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ password: string; login: string }>
        ) => {
            console.log(registeredUsers);
            
            const user = registeredUsers[0].registered_users.find(
                (user) =>
                    user.login === action.payload.login &&
                    user.password === action.payload.password
            );
            if (user) {
                state.isAuth = true;
                localStorage.setItem("isAuth", "true");
            }
        },
        logout : (state) => {
            state.isAuth = false;
            localStorage.setItem("isAuth", "false");
        },
        registerUser : (state) => {
            state.isAuth = true;
            localStorage.setItem("isAuth", "true");
        }

    },
});

export const { login, logout, registerUser } = authSlice.actions;
