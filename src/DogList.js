import { v4 as uuid } from "uuid";
import React from "react";
import Dog from "./Dog";

function DogList({ dogs }) {

  console.log('dogs', dogs);

  return (
    <ul>
      {dogs.map((dog) => (
        <Dog dog={dog} key={uuid()} />
      ))}
    </ul>
  );
}

export default DogList;

