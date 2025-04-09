import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore,
} from "react-redux";
import { authSlice } from "../features/auth";

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
