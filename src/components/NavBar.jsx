import { CartWidget } from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  return(
    <nav>
      <Link to='/'>
        <h1>Ecommerce</h1>
      </Link>
      <div>
        <NavLink to={`/category/Galaxy Z`}>Galaxy Z</NavLink>
        <NavLink to={`/category/Galaxy S`}>Galaxy S</NavLink>
        <NavLink to={`/category/Tablets`}>Tablets</NavLink>
      </div>
      <CartWidget/>
    </nav>
  )
}