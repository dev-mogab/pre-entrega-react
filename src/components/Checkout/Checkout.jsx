import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

export const Checkout = () => {
  const [formValues, setFormvalues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { items, clearCart } = useContext(CartContext);

  const total = items.reduce((acc, val) => acc + val.quantity * val.price, 0);

  const handleChange = (ev) => {
    setFormvalues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.phone) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }
    sendOrder();
  };

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items,
      total,
    };

    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormvalues({
          name: "",
          phone: "",
          email: "",
        });
        clearCart();
        alert("Your order" + id + "has been processed");
      }
    });
  };

  return (
    <div className="user-data-form">
      <h2>Enter user data</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-field"
            onChange={handleChange}
            value={formValues.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input-field"
            onChange={handleChange}
            value={formValues.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="input-field"
            onChange={handleChange}
            value={formValues.phone}
            required
          />
        </div>
      </form>
      <button className="purchase-button" onClick={handleSubmit}>
        Purchase
      </button>
    </div>
  );
};
