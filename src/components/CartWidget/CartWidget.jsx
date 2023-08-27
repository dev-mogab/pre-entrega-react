import cart from '../../assets/cart.png'
import './CartWidget.css'

export const CartWidget = () => {
  return(
    <div className='right'>
      <img src={cart} alt="cart" className="cart"/>
      <span>0</span>
    </div>
    ) 
}