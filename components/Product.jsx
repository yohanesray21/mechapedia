import { Link } from "@mui/material";
import React from "react";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  console.log(name);

  return (
    <div>
      <Link
        href={`/product/${slug.current}`}
        style={{ textDecoration: "none" }}
      >
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
