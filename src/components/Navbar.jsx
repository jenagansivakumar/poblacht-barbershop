import "../../src/index.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <a href="/">Poblacht Barbershop</a>
        <ul>
          <li>
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
    </div>
  );
};
