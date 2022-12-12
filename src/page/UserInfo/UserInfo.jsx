import useGlobalWeather from "../../hooks/useGlobalWeather";
import MirrowContent from "../../component/MirrowContent/MirrowContent";
import useWeather from "../../hooks/useWeather";
import'./style.css'
import getDay from "../../services/getDay";

export default function UserInfo (){
  const {loading} = useWeather()

  const weather = useGlobalWeather()
  console.log(weather)


  return(
    <MirrowContent>
      {
        loading 
        ? <p>Cargando.....</p> 
        :<div className="content-user">
          <h2>{weather.name},<br/> {weather.country}</h2>
          <img src={weather.current.condition.icon} alt='clima'/>
          <h4>{getDay(weather.current.last_updated)}</h4>
          <p>Temp:{weather.current.temp_c}°C</p>
        </div>
      }
    </MirrowContent>
  )
}