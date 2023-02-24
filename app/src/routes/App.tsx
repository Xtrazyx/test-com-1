import { Outlet } from "react-router-dom";
import RouterLink from "../componants/RouterLink";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Outlet />
      <RouterLink route={`/players`} label={`Look at all players`} />
    </div>
  );
}

export default App;
