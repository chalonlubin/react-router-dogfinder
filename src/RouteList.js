import { Route, Routes } from 'react-router-dom';
import DogList from "./DogList"
import DogDetails from "./DogDetails"



function RouteList() {
  return (
    <Routes>
      <Route element={<DogList />} path="/" />
      <Route element={<DogDetails />} path="/dogs/:name" />
      <Route path="*" element={<DogList />} />
    </Routes>
  );
}


export default RouteList;