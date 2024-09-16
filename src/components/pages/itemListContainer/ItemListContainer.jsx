import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";

const ItemListContainer = () => {
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="MacBook Pro" precio={1400} />
        <ProductCard titulo="Monitor 17 Pulgadas" precio={600} />
      </div>
    </div>
  );
};

export default ItemListContainer;
