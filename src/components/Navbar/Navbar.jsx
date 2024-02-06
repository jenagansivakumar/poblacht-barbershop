import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">Poblacht Barbershop</Link>
      <ul>
        <li>
          <Link to="/about"> Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/pricing"> Pricing</Link>
        </li>
        <li>
          <Link to="/pricing"> Bookings</Link>
        </li>
        <li>
          <Link to="/pricing"> Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
