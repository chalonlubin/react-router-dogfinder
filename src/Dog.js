

function Dog({ age, name, src }) {



  return (
    <li>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <img src={`/${src}.jpg`} alt={`${name}-dog`} />
    </li>
  );
}

export default Dog;