import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../common/Card";
import ProductSection from "../common/ProductSection";

const JustForYou = () => {
  const products = useLoaderData();
  const [randomProduct, SetRandomProduct] = useState([]);
  useEffect(() => {
    const top20 = products.slice(0, 20);
    SetRandomProduct(top20);
  }, [products]);
  return (
    <div className="grid-cols-[repeat(auto-fit,_minmax(250px,_300px)]">
      <h2 className="h2 mb-2">Just For You</h2>
      <ProductSection addStyle={"grid md:grid-cols-2 xl:grid-cols-4 gap-2"}>
        {randomProduct.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductSection>
    </div>
  );
};

export default JustForYou;
