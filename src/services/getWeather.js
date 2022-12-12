
export default function getWeather ({ country = 'caracas' } = {}) {
  const countryForSearch = country || 'Caracas'
  return fetch(`http://api.weatherapi.com/v1/forecast.json?key=0c1422890cd84ce3852230832220212&q=${countryForSearch}&days=7&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(response => {
      const { current } = response
      const { name, region, country } = response.location
      const { forecastday } = response.forecast

      return { name, region, country, forecastday, current }
    })
}
