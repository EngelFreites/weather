import useWeather from '../../hooks/useWeather'
import MirrowContent from '../../component/MirrowContent/MirrowContent'
import './style.css'
import WeatherDays from '../../component/WeatherDays/WeatherDays'
import WeatherHours from '../../component/WeatherHours/WeatherHours'

export default function WeatherDay({userHour, day}){
  const  {loading} = useWeather()
 
  if(loading ){
    return(
      <p> Cargando....</p>
    )
  }

  return(
   <MirrowContent>
      <div className='content-days'>
        {
          day
          ?<WeatherDays userHour={userHour} />
          :<WeatherHours userHour={userHour}/>
        }
      </div>

   </MirrowContent>

  
  )
}