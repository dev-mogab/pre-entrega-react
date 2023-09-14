import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const refCollection = categoryId
      ? query(collection(db, "ItemList"), where("category", "==", categoryId))
      : collection(db, "ItemList");

    getDocs(refCollection)
      .then((res) => {
        const adaptedProd = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(adaptedProd);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
