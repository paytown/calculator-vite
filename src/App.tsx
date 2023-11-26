import { useState } from 'react'
import './App.scss'
import Screen from './components/Screen'
import Button from './components/Button'

const buttonVals = ['AC', '+-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']


function App() {
  const [currentVal, setCurrentVal] = useState('0')
  const [previousVal, setPreviousVal] = useState('0')
  const [operator, setOperator] = useState('')
  
  const handleClick = (btnVal: string | number) => {
    if (typeof btnVal === 'number' || btnVal === '.') return handleNumber(btnVal)

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
        case '=':
          handleEquals()
          break
        default:
          console.error(`${btnVal} is not recognized`)
          break
      }
    }
  }

  const handleNumber = (val: number | '.') => {
    if (val === '.' && currentVal.includes('.')) return

    if (currentVal === "0") {
      return setCurrentVal(`${val}`)
    }
    
    return setCurrentVal(`${currentVal}${val}`)
  }

  const handleReset = () => {
    setCurrentVal('0')
    setPreviousVal('0')
    setOperator('')
  }

  const handleInvert = () => {
    setCurrentVal(`${parseFloat(currentVal) * -1}`)
  }

  const handlePercent = () => {
    setCurrentVal(`${parseFloat(currentVal) * .01}`)
  }

  const handleOperator = (op: string) => {
    setOperator(op)
    setPreviousVal(currentVal)
    setCurrentVal('0')
  }

  const handleEquals = () => {
    const current = parseFloat(currentVal)
    const previous = parseFloat(previousVal)
   
    switch (operator) {
      case "+":
        setCurrentVal(`${previous + current}`)
        break
      case "-":
        setCurrentVal(`${previous - current}`)
        break
      case "*":
        setCurrentVal(`${previous * current}`)
        break
      case "/":
        setCurrentVal(`${previous / current}`)
        break
      default:
        return
    }

    setOperator('')
    setPreviousVal('')
  }

  return (
    <div className='calc-wrapper'>
      <Screen value={currentVal != "0" ? currentVal : previousVal}/>

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
