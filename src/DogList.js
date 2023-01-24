import { v4 as uuid } from "uuid";
import React from "react";
import Dog from "./Dog";

/** Renders a list of dogs
 *
 * Props: dogs  [{name, age, src, facts }, ...]
 *
 * State: none
 *
 * RouteList -> DogList -> { Dog }
 */
function DogList({ dogs }) {
  return (
    <ul>
      {dogs.map((dog) => (
        <Dog dog={dog} key={uuid()} />
      ))}
    </ul>
  );
}

export default DogList;
