import React from "react";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";
import { customFetch } from "../utils/indexAxios";

const URL = "/products";
export const loader = async ({ request }) => {
  const response = await customFetch(URL);

  // console.log(response);

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
