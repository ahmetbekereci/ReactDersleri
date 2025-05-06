import React, { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const artır = () => {
    setNumber(number - 1)
  }
  const azalt = () => {
    setNumber(number + 1)
  }

  return (
    <div className='container'>
      <h3>Counter:</h3>
      <button className='btn' onClick={artır} >-</button>
      <h4>{number}</h4>
      <button className='btn1' onClick={azalt}>+</button>
    </div>
  )
}

export default App
