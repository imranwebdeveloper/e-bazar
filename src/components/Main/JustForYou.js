import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import Card from "../common/Card";
import ProductSection from "../common/ProductSection";

const JustForYou = () => {
  const { data, loading } = useContext(ProductsContext);
  return loading ? (
    <p> Loading.... </p>
  ) : (
    <div className="grid-cols-[repeat(auto-fit,_minmax(250px,_300px)]">
      <h2 className="h2 mb-2">Just For You</h2>
      <ProductSection addStyle={"grid md:grid-cols-2 xl:grid-cols-3  gap-2"}>
        {data.slice(0, 20).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductSection>
    </div>
  );
};

export default JustForYou;
