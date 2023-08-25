import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncProducts";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const[product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then(res => {
        setProduct(res)
      })
      .catch(error => {
        console.error(error)
      })
  }, [itemId])

  return(
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}