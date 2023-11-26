import { useState } from 'react'
import './App.scss'
import Screen from './components/Screen'
import Button from './components/Button'

const buttonVals = ['AC', '+-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

const handleClick = (value: string | number) => {
  console.log(typeof value)
}

function App() {
  return (
    <div className='calc-wrapper'>
      <Screen value={123}/>

      <div className="button-wrapper">
        {buttonVals.map((btn, i) => {
          let className = ""

          if (typeof btn === 'number' || btn === '.') className = "number"
          if (btn === '/' || btn === '*' || btn === '-' || btn === '+' || btn === "=") className = "operator"
          if (btn === 0) className = "number zero"

          return <Button className={className} onClick={() => handleClick(btn)} key={i + btn.toString()}>{btn}</Button>
        })}
      </div>
    </div>
  )
}

export default App
