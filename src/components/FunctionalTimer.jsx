import { useState, useEffect } from 'react'

const FunctionalTimer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds(seconds + 1)  // wrong
      setSeconds(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <div>Seconds: {seconds}</div>
}

export default FunctionalTimer
