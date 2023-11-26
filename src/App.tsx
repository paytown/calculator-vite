import { useState } from 'react'
import './App.scss'
import Screen from './components/Screen'
import Button from './components/Button'

const buttonVals = ['AC', '+-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']


function App() {
  const [calcVal, setCalcVal] = useState(0)
  
  const handleClick = (btnVal: string | number) => {
    if (typeof btnVal === 'string') {
      switch(btnVal) {
        case 'AC':
          handleReset()
          break
        case '+-':
          handleInvert()
          break
        case '%':
          handlePercent()
          break
        case '/': 
        case '*':
        case '-':
        case '+':
          handleOperator(btnVal)
          break
        case '.':
          handleDecimal()
          break
        case '=':
          handleEquals()
          break
        default:
          console.error(`${btnVal} is not recognized`)
          break
      }
    }

    if (typeof btnVal === 'number') handleNumber(btnVal)
  }

  const handleNumber = (val: number) => {
    console.log('handleNumber', val)
  }

  const handleReset = () => {
    setCalcVal(0)
  }

  const handleInvert = () => {
    console.log('handleInvert')
  }

  const handlePercent = () => {
    console.log('handlePercent')
  }

  const handleOperator = (opp: string) => {
    console.log('handleOpperator', opp)
  }

  const handleDecimal = () => {
    console.log('handleDecimal')
  }

  const handleEquals = () => {
    console.log('handleEquals')
  }

  return (
    <div className='calc-wrapper'>
      <Screen value={calcVal}/>

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
