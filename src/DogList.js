import React from "react";
import axios from "axios";

function DogList() {

  async function getDogs () {
    const response = await axios.get("http://localhost:5001/dogs");
    console.log(response);
    // response.data
  }
  getDogs();
  return <p>dog</p>

}

export default DogList;




//  give a list of dogs from the API [{dog: details}....]
// feed that to dog([])
  // return a html compenent for each dog