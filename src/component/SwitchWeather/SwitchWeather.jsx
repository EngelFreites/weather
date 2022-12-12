import { useRef } from 'react'
import './style.css'

export default function SwitchWeather ({ setDay }) {
  const checkBox = useRef(null)

  console.log(checkBox)
  return (
    <div className='all-switch'>
    <p>Hours/Days</p>
    <label className="switch">
      <input type="checkbox" ref={checkBox} onClick={(e) => setDay(checkBox.current.checked)}/>
      <span className="slider round"></span>
    </label>

    </div>
  )
}
