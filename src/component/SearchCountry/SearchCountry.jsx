import './style.css'
import { useState } from 'react'
import useWeather from '../../hooks/useWeather'

export default function SearchCountry () {
  const [nameCountry, setNameCountry] = useState('')
  const [country, setCountry] = useState()

  useWeather({ country })

  const handleSubmit = (e) => {
    e.preventDefault()
    setCountry(nameCountry)
  }

  const handleChange = (e) => {
    setNameCountry(e.target.value)
  }

  return (
    <div className='content-form'>
      <form onSubmit={handleSubmit}>
        <button className='btn'>Search</button>
        <input type='text' placeholder=' Search Weather Country' onChange={handleChange}/>
      </form>
  </div>

  )
}
