import { useContext } from "react";

import { ProductsContext } from "../../../contexts/products.context.jsx";
import { ProductCard } from "../../product-card/product-card.component.jsx";

import './shop.styles.scss'

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      { products.map((product) => (
       <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}