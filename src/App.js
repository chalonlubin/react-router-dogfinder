import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
