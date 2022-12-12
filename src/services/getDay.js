export default function getDay (date) {
  console.log(date)
  const newDate = new Date(date).getDay()
  console.log(newDate)
  const days = ['MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT', 'SUN']
  console.log(days[newDate])
  return days[newDate]
}
