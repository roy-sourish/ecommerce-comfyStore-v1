import React from "react";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";
import { customFetch } from "../utils/indexAxios";

const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log(params);
  const response = await customFetch(url, {
    params,
  });

  // console.log(response);
  console.log(request);

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
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
