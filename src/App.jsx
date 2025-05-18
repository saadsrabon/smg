import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Mission from './components/Mission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Mission/>
    </>
  )
}

export default App
