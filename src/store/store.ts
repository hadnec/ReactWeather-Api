import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSliceReducer from "./slices/currentWeatherSlice";

const rootReduser = combineReducers({
    CurrentWeatherSliceReducer
})

export const store = configureStore({
    reducer: rootReduser,
    middleware: getDefaultMiddleware => getDefaultMiddleware
        ({
            serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = typeof store;
export type AppDispath = AppStore['dispatch'];