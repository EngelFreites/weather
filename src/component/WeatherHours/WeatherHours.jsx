import useGlobalWather from '../../hooks/useGlobalWeather'



export default function WeatherHours({userHour}){
  const weather = useGlobalWather()

  const {hour} = weather.forecastday[0]

  const restHours = hour.filter( (res, ind) => ind >= userHour)

  return(
    <>
      {
        restHours.map( res =>(
          <div>
            <div className='content-day'>
              <h4> {new Date(res.time).getHours()}:00</h4>

              <img src={res.condition.icon} alt='img'/>

              <p>
                {res.condition.text}
              </p>
              <p>
              Max: {res.temp_c}°C
              </p>
          </div>
        </div>
        ))
      }
    </>
  )
}