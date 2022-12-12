import React, {useState} from "react";



const WeatherContext = React.createContext({});


export function WeatherUserContext ({children}){
  const [userWeather, setUserWeather] = useState({})
  return(
    <WeatherContext.Provider value={{userWeather, setUserWeather}}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext