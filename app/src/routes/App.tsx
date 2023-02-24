import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="App">
      <Link to={`players`}>Look at all players</Link>
    </div>
  )
}

export default App
