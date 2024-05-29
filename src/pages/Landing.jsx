import React from "react";
import { Hero } from "../components/components-index.js";
import { customFetch } from "../utils/indexAxios.js";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;

  return { products };
};

function Landing() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Landing;
