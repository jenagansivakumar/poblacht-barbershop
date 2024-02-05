import "../../src/index.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};
