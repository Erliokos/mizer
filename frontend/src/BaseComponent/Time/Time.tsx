import React, { useEffect, useState } from 'react'
import moment from 'moment'

export function Time() {
  
  const INTERVAL = 1
  const [duration, setDuration] = useState(moment.duration(0,'seconds'))
  const [time, setTime] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(prev => prev + INTERVAL)
      setDuration(moment.duration(time,'seconds'))
    },1000)
  return ()=>clearInterval(interval)
  })
  return (
    <div>{duration.hours() + ":" + duration.minutes() + ":" + duration.seconds()}</div>
  )
}
