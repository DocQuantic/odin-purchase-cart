import { useState } from "react"
import './App.css'

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys")

  const clickHandler = () => {
    setHeading("Radical Rhinos")
  }

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
