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
  const minutes = duration.minutes() < 10 ? '0' + duration.minutes() : duration.minutes()
  const seconds = duration.seconds() < 10 ? '0' + duration.seconds() : duration.seconds()
  return (
    <div>{duration.hours() + ":" + minutes + ":" + seconds}</div>
  )
}
