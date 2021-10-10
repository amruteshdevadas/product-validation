import React, { useState } from "react";

let ProductContext = React.createContext();

export default ProductContext;

//THIS will provide data to all children

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      id: 1,
      productName:
        "Learning Resources Serve It Up! Play Restaurant, Pretend Restaurant Set, 35 Pieces, Ages 3+",
      category:
        "Toys & Games | Dress Up & Pretend Play | Pretend Play | Kitchen Toys | Play Food",
      sellingPrice: 23.74,
      productDescription:
        "Includes play food versions of breakfast and dinner favorites including a pancake, fried egg, and T-bone steak",
      image: "https://images-na.ssl-images-amazon.com/images/I/610OglBtxfL.jpg",
    },
    {
      id: 2,
      productName:
        "Educational Insights Nancy B's Science Club Binoculars and Wildlife Activity Journal",
      category:
        "Electronics | Camera & Photo | Binoculars & Scopes | Binoculars",
      sellingPrice: 11.24,
      productDescription:
        "From bird search and ecosystem challenges to creative writing and drawing exercises, this set is perfect for the nature lover in your life!",
      image: "https://images-na.ssl-images-amazon.com/images/I/41Ur8ETZYHL.jpg",
    },
  ]);
  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
