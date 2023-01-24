import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
  return (
    <nav className="NavBar">
      <NavLink to="/">Home</NavLink>
      {dogs.map(dog => (
        <NavLink to={`/dogs/${dog.name}`} key={dog.name}>
          {dog.name}
        </NavLink>
      ))}
      {/* <NavLink to="/doglist">DogList</NavLink> */}
    </nav>
  );
}

export default NavBar;
