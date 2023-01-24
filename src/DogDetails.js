import React from "react";
import { useParams } from "react-router-dom";
import Dog from "./Dog";


function DogDetails({dogs}) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name === name);

  return (
    <Dog dog={dog}/>
  )

}

export default DogDetails;