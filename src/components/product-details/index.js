import React from "react";
import Testimonial from "@/app/Home/Testimonials";
import Image from "next/image";
import Image1 from "../../../public/img/medicineImg.jpg";
import ProductDesc from "./product-desc";

const ProductDetails = (props) => {
  const { productDetails } = props;
  return (
    <div>
      <div className="container">
        <div className="productDetails">
          <div className="news-head new-head-extra single-image">
            <Image
              height={1000}
              width={1000}
              src={productDetails?.photo ? productDetails?.photo : Image1}
              alt="product image"
            />
          </div>
          <ProductDesc productDetails={productDetails} />
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default ProductDetails;
