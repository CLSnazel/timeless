import React, { useEffect, useState } from 'react'
import { Content } from './Alarms.styles'
import AlarmsForm from './AlarmsForm'

export default function Alarms() {
  const [alarms, setAlarms] = useState()
  let dbAlarms
  
  useEffect(() => {
    async function fetchAlarms () {
      const res = await fetch('http://localhost:8001/alarm/all')
      setAlarms(await res.json())
    }
    fetchAlarms()
  }, [])

  if (alarms) {
    console.log(alarms);
    dbAlarms = alarms.map(({ alarm, daysActive, sound, user}) => (
      <AlarmsForm
        key={alarm.time.replace(/ /g, '')}
        alarm={alarm}
        daysActive={daysActive}
        sound={sound}
        user={user}
      />
    ))
  }
  
  return (
    <Content id='alarms'>
      {dbAlarms}
    </Content>
  )
}


// async function postAlarm () {
//   const res = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return res.json()

// }
