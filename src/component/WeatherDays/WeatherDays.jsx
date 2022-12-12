import React from 'react'
import useGlobalWeather from '../../hooks/useGlobalWeather'
import getDay from '../../services/getDay'

export default function WeatherDays ({ userHour }) {
  const { forecastday } = useGlobalWeather()

  return (
    <>
    {
      forecastday.map(climaDay => (
        <div className='content-day' key={climaDay.date}>

          <h4>{getDay(climaDay.date)}</h4>

          <img src={climaDay.hour[userHour].condition.icon} alt='img'/>

          <p>
            {climaDay.hour[userHour].condition.text}
          </p>
          <p>
           Max: {climaDay.day.maxtemp_c}°C
          </p>
          <p>
           Min: {climaDay.day.mintemp_c}°C
          </p>
        </div>
      ))
    }
    </>
  )
}
