import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about"> about</Link>
        </li>
        <li>
          <Link> pricing</Link>
        </li>
      </ul>
    </nav>
  );
};
