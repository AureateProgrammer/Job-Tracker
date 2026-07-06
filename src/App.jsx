import './App.css'
import JobName from './Component/JobName'
import { JobBox } from './Component/JobBox'
import {Notes} from './Component/Notes'

function App() {
  return (
    <div className="app-root">
      <JobName />
      <Notes />
      <JobBox />
    </div>
  )
}

export default App
