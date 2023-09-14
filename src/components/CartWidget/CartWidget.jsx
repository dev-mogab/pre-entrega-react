import cart from '../../assets/cart.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  return(
    <Link to="/cart" className="cart-widget">
      <img className="cart" src={cart} alt="cart" />
      <span>{totalQuantity}</span>
    </Link>
  )
}