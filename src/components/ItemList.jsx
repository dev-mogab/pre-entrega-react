import { Item } from "./Item"

export const ItemList = ( {products} ) => {
  return(
    <div>
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}