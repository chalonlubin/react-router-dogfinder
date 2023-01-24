import { Route, Routes } from 'react-router-dom';
import DogList from "./DogList"
import DogDetails from "./DogDetails"



function RouteList({ dogs }) {

  console.log('dogs',dogs);
  // find

  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/" />
      <Route element={<DogDetails />} path="/dogs/:name" />
      <Route path="*" element={<DogList dogs={dogs} />} />
    </Routes>
  );
}


export default RouteList;