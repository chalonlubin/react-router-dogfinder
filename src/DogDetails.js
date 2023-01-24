import React from "react";
import { useParams } from "react-router-dom";
import Dog from "./Dog";

/** Renders a single dog
 *
 * Props: dog {name, age, src, facts}
 *
 * State: none
 *
 * App -> RouteList -> DogDetails -> Dog
*/
function DogDetails({ dogs }) {

  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name === name);

  return <Dog dog={dog} extraDetails={true} />;
}

export default DogDetails;
