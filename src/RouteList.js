import { Route, Routes } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";



function RouteList({ dogs }) {

  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/" />
      <Route element={<DogDetails dogs={dogs} />} path="/dogs/:name" />
      <Route path="*" element={<DogList dogs={dogs} />} />
    </Routes>
  );
}


export default RouteList;