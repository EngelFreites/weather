import './App.css'  
import SearchCountry from './component/SearchCountry/SearchCountry'
import WeatherDay from './page/WeatherDay/WeatherDay'
import { WeatherUserContext } from './Context/WeatheUserContext'
import UserInfo from './page/UserInfo/UserInfo'
import Layout from './component/Layout/Layout'
import SwitchWeather from './component/SwitchWeather/SwitchWeather'
import { useState } from 'react'
import User from './component/User/User'

function App() {
  const [day, setDay] = useState(false)

  const userHour = new Date().getHours()

  return (
    <WeatherUserContext>
      <div className="App">
        <div className='header'>
          <User/>
          <SearchCountry/>
          <SwitchWeather setDay={setDay}/>
        </div>
     

        <Layout>
            <div className='user'>
              <UserInfo/>
            </div>
            <div className='seacrh-and-content'>
              <WeatherDay userHour={userHour} day={day}/>
            </div>
        </Layout>
      </div>
    </WeatherUserContext>
  )
}

export default App
