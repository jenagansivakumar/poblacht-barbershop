import "../../src/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <a href="/">Poblacht Barbershop</a>
      <ul>
        <li className="active">
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
