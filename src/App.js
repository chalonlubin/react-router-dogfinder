import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RouteList from "./RouteList";
import NavBar from "./NavBar";

function App() {
  const [dogs, setDogs] = useState({ data: null, isLoading: true });

  async function getDogs() {
    const response = await axios.get("http://localhost:5001/dogs");
    setDogs({ data: response.data, isLoading: false });
  }

  if (dogs.isLoading) {
    getDogs();
    return <p>Loading...</p>;
  }

  console.log("response:", dogs.data);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <RouteList dogs={dogs.data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
