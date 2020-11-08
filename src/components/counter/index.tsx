import React, { useState, useEffect } from 'react'

// agregar datos de comienzo y fin para los periodos de pomodoro
//las fechas las vamos a guardar asi https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date/toISOString
//https://www.compose.com/articles/understanding-dates-in-compose-mongodb/
// pasarle una funcion al componente que llame cuanto se acaba un periodo de pomodoro

// que pasa si esa funcion falla? Tendriamos que poder guardar las cosas en un context

const Counter = (): JSX.Element => {
  const [typePeriod, setTypePeriod] = useState('')
  const [second, setSecond] = useState<string>('00')
  const [minute, setMinute] = useState<string>('00')
  const [isActive, setIsActive] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1)
        const secondCounter = counter % 60 === 0 ? '00' : counter % 60
        const minuteCounter = Math.floor(counter / 60) === 0 ? '00' : Math.floor(counter / 60)

        const computedSecond = secondCounter.toString()
        const computedMinute = minuteCounter.toString()

        setSecond(computedSecond)
        setMinute(computedMinute)
      }, 1000)
    }

    return (): void => clearInterval(intervalId)
  }, [isActive, counter])

  useEffect(() => {
    if (typePeriod === 'pomodoro') {
      setIsActive(true)
      setCounter(1499)
    }

    if (typePeriod === 'short-break') {
      setIsActive(true)
      setCounter(299)
    }

    if (typePeriod === 'long-break') {
      setIsActive(true)
      setCounter(599)
    }
  }, [typePeriod])

  const stopCounter = (): void => {
    setIsActive(false)
  }

  const resetCounter = (): void => {
    setIsActive(false)
    setSecond('00')
    setMinute('00')
  }

  const startCounter = (typePeriod: string): void => {
    setTypePeriod(typePeriod)
  }

  return (
    <div>
      <div>
        <span>{minute}</span>:<span>{second}</span>
      </div>
      <div>
        <button onClick={(): void => startCounter('pomodoro')}>Start pomodoro</button>
      </div>
      <div>
        <button onClick={(): void => startCounter('short-break')}>Start short break</button>
      </div>
      <div>
        <button onClick={(): void => startCounter('long-break')}>Start long break</button>
      </div>
      <div>
        <button onClick={stopCounter}>Stop</button>
      </div>
      <div>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
