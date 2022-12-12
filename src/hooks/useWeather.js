import { useState, useEffect, useContext } from 'react'
import WeatherContext from '../Context/WeatheUserContext'
import getWeather from '../services/getWeather'

export default function useWeather ({ country = 'Caracas' } = {}) {
  const [loading, setLoading] = useState(true)

  const { userWeather, setUserWeather } = useContext(WeatherContext)

  useEffect(() => {
    getWeather({ country }).then(res => {
      setLoading(true)
      setUserWeather(res)
      setLoading(false)
    })
  }, [country])

  return { userWeather, loading }
}
