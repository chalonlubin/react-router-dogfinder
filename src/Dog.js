
/** Component to render a dog.
 *
 * Props:
 * - dog: object with keys name, src, age
 *
 * State: none
 *
 * App -> RouteList -> DogList -> Dog
 */
function Dog({dog: { name, src, age, facts }, extraDetails=false}) {
  console.log('extraDetails',extraDetails);
  return (
    <li>
      <div>
        <h3>Name: {name}</h3>
        <img src={`/${src}.jpg`} alt={`${name}-dog`} />
        {extraDetails && (
        <div>
          <p>Age: {age}</p>
          <ul>
            {facts.map((fact) => (
              <li>{fact}</li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </li>
  );
}

export default Dog;
