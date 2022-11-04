import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWheather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  useEffect(()=>{
    dispatch(fetchCurrentWheather('Wroclaw'));
  },[])
  const {weather} = useCustomSelector(selectCurrentWeatherData)
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo weather={weather}/>
      </div>
      <Days />
    </div>
  );
};
