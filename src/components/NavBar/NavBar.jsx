import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <h1>Ecommerce</h1>
      </Link>
      <div className="list">
        <NavLink to={`/category/Galaxy Z`} className="nav-link">
          Galaxy Z
        </NavLink>
        <NavLink to={`/category/Galaxy S`} className="nav-link">
          Galaxy S
        </NavLink>
        <NavLink to={`/category/Tablets`} className="nav-link">
          Tablets
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
