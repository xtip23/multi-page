import React from "react";

import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const parans = useParams();

  return (
    <>
      <h1>ProductDetailPage</h1>
      <div>{parans.productId}</div>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
