import React, { useContext } from "react";
import cafe from "../../assets/cafe.jpeg";
import libros from "../../assets/libros.jpeg";
import notebook from "../../assets/notebook.jpg";
import silla from "../../assets/silla.jpg";
import { ProductsContext } from "./ProductsContext";


const ProductsProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      title: "Coffee",
      image: cafe,
      alt: "Coffee",
      description: "Coffee beans, special for programmers",
      price: 10,
    },
    {
      id: 2,
      title: "Books",
      image: libros,
      alt: "Books",
      description: "Programming books",
      price: 60,
    },
    {
      id: 3,
      title: "Notebook",
      image: notebook,
      alt: "Notebook",
      description: "Notebook for programmers",
      price: 500,
    },
    {
      id: 4,
      title: "Chair",
      image: silla,
      alt: "Chair",
      description: "Chair for programmers",
      price: 100,
    },
  ];

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  const { products } = useContext(ProductsContext);
  return products;
};
