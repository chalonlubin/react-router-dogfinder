
function Dog({dog: { name, src }}) {

  return (
    <li>
      <div>
        <h3>Name: {name}</h3>
        <img src={`/${src}.jpg`} alt={`${name}-dog`} />
      </div>
    </li>
  );
}

export default Dog;
