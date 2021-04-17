import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create a Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
