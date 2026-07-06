import { useState } from 'react'
import './App.css'
import JobName from './Component/JobName'
import { JobBox } from './Component/JobBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <JobName />
      <JobBox />
    </div>

    </>
  )
}

export default App
