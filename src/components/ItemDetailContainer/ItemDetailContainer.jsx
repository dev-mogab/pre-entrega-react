import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState();

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const docRef = doc(db, "ItemList", itemId);

    getDoc(docRef)
      .then((res) => {
        const data = res.data();
        const adaptedProd = { id: res.id, ...data };
        setProduct(adaptedProd);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
