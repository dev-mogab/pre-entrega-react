import { ItemCount } from "./ItemCount";

export const ItemDetail =({ id, name, img, category, description, price, stock }) => {
  return(
    <div>
      <header>
        <h2>
          {name}
        </h2>
      </header>
      <div>
        <img src={img} alt={name} />
      </div>
      <main>
        <p>
          Category: {category}
        </p>
        <p>
          Description: {description}
        </p>
        <p>
          Price: ${price}
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