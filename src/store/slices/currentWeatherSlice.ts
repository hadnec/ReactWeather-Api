import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type CurrentWeather={
    weather :Weather;
    isLoading:boolean;
    response :Responsx;   
}

type Responsx ={
    status: number;
    message: string;
}

const initialState :CurrentWeather={
    weather:{
        main:{
            temp:0,
            feels_like:0,
            pressure:0,
        },
        weather:{[0]:{
            description:'',
        }}
    },
    isLoading:false,
    response:{
        status:0,
        message:'',

    }
}

export const CurrentWeatherSlice = createSlice({
    name:'current_weather',
    initialState,
    reducers:{
        fetchCurrentWheather(state){
            state.isLoading = true;
        },
        fetchCurrentWheatherSuccess(state, action:PayloadAction<AxiosResponse<Weather>>){
                state.weather = action.payload.data;
                state.isLoading =false;
                state.response={
                    status: action.payload.status,
                    message: action.payload.statusText,
                }
        },
        fetchCurrentWheatherErorr(state, action:PayloadAction<AxiosResponse<Weather>>){
            state.isLoading =false;
            state.response={
                status: action.payload.status,
                message: action.payload.statusText,
            }
    },
    }
})

export default CurrentWeatherSlice.reducer;