import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import axios from "axios";
import Dog from "./Dog";

function DogList(dogs) {
  // let dogs;



  return (
    <ul>
      {dogs.map(dog => <Dog dog={dog} key={uuid()} />)}
    </ul>
  );

}

export default DogList;




//  give a list of dogs from the API [{dog: details}....]
// feed that to dog([])
  // return a html compenent for each dog