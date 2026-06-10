import { useState } from 'react'
import './App.css'
import JobName from './Component/JobName'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <JobName />
    </div>
    </>
  )
}

export default App
