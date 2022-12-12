import './style.css'

export default function AboutCountry({country, region, name}){
  return(
    <div className='content-info'>
      <div>
        <h3>Country</h3>
        <p>{country}</p>
      </div>
  
      <div>
        <h3>Region</h3>
        <p>{region}</p>
      </div>
  
      <div>
        <h3>Name</h3>
        <p>{name}</p>
      </div>
    </div>
  )
 
}