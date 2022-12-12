import { useContext } from 'react'
import WeatherContext from '../Context/WeatheUserContext'

export default function useGlobalWeather () {
  const { userWeather } = useContext(WeatherContext)
  return userWeather
}
