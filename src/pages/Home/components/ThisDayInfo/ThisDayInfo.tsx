import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: any;
}

export const ThisDayInfo = ({weather}: Props) => {
  let items = [{
    icon_id: 'temp',
    name: 'Temperatre',
    value: `${Math.floor(weather.main.temp)}-feels like ${Math.floor(weather.main.feels_like)}`,
  },
  {
    icon_id: 'pressure',
    name: 'Atmospheric pressure',
    value: `${weather.main.pressure} mmHg `,
  },
  {
    icon_id: 'precipitation',
    name: 'Precipitation',
    value: `${ weather.weather[0].description}`,
  },
  {
    icon_id: 'wind',
    name: 'Wind',
    value: '3 m/s southwest',
  },]
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="cloud" />
    </div>
  );
};
