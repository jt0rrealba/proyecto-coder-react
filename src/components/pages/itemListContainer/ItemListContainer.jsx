import { useEffect, useState } from "react";
import { products } from "../../../productMock";
import ItemList from "./ItemList";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isLogued = true;

      if (isLogued) {
        resolve(products);
      } else {
        reject({ message: "Algo salio mal..." });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("Entro en el catch ", error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
