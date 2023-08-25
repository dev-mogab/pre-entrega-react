import { Link } from "react-router-dom"

export const Item = ({id, name, img, price, stock}) => {

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
          Price: ${price}
        </p>
        <p>
          Stock: {stock}
        </p>
      </main>
      <footer>
        <Link to={`/item/${id}`}>View details</Link>
      </footer>
    </div>
  )
}