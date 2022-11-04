import { WeatherService } from "../../services/WheatherService";
import { CurrentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispath } from "../store";

export const fetchCurrentWheather = (payload:string)=>async (dispatch: AppDispath) =>{
    try{
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWheather());
    const res = await WeatherService.getCurrentWeather(payload);
    if (res.status === 200){
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWheatherSuccess(res));
    } else{
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWheatherErorr(res));
    }
    } catch (error) {
        console.log(error);
    }
};