import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductByCategory } from "../../asyncProducts";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css'

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then((res) => {
        setProducts(res)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  return(
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}