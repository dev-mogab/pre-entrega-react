import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return(
    <header>
      <h1>Ecommerce</h1>
      <nav>
        <ul>
          <li><a href="#">Producto 1</a></li>
          <li><a href="#">Producto 2</a></li>
          <li><a href="#">Producto 3</a></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}