import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const hadleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      img,
    };

    addItem(item, quantity);
  };

  return (
    <div className="detail-container">
      <header>
        <h2>{name}</h2>
      </header>
      <div>
        <img src={img} alt={name} className="detail-image" />
      </div>
      <main className="detail-main">
        <p>Price: ${price}</p>
        <p>Description: {description}</p>
      </main>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="purchase-btn">
            Make Purchase
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={hadleOnAdd} />
        )}
      </footer>
    </div>
  );
};
