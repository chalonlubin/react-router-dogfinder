import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** NavBar component
 *
 * Props: dogs [{name, age, src, facts}, ...]
 *
 * State: none
 *
 * App -> NavBar
 */
function NavBar({ dogs }) {
  return (
    <nav className="NavBar">
      <NavLink to="/">Home</NavLink>
      {dogs.map(dog => (
        <NavLink to={`/dogs/${dog.src}`} key={dog.name}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
