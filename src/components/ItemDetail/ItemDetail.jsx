import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetail.css'

export const ItemDetail =({ id, name, img, category, description, price, stock }) => {
  return(
    <div className="detail-container">
      <header>
        <h2>
          {name}
        </h2>
      </header>
      <div>
        <img src={img} alt={name} className="detail-image"/>
      </div>
      <main className="detail-main">
        <p>
          Price: ${price}
        </p>
        <p>
          Description: {description}
        </p>
      </main>
      <footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => {
          console.log('Items added', quantity);
        }}/>
      </footer>
    </div>
  )
}