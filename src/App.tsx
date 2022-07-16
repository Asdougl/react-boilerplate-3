import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="container mx-auto">
      <h1>hello world</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <div>count {counter}</div>
    </div>
  )
}

export default App
