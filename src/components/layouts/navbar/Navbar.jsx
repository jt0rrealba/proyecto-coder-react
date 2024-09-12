import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav__shop">
      <h1>LogoShop</h1>
      <ul>
        <li>
          <a href="#">Categoría 1</a>
        </li>
        <li>
          <a href="#">Categoría 2</a>
        </li>
        <li>
          <a href="#">Categoría 3</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
