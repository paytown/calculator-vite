import { useState } from 'react'
import './App.css'
import Screen from './components/Screen'
import Button from './components/Button'

function App() {
  return (
    <div className='calc-wrapper'>
      <Screen value={123}/>

      <div className="button-wrapper">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
    </div>
  )
}

export default App
