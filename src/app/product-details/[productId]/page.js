import Breadcrumbs from "@/components/Breadcrumbs";
import HeaderTwo from "@/components/Header/HeaderTwo";
import ProductDetails from "@/components/product-details";
import {
  getProductDetailsWithId,
  getProductsData,
} from "@/services/api/product-api";
import React from "react";

const Page = async ({ params }) => {
  const data = await getProductDetailsWithId(params.productId);
  return (
    <>
      <HeaderTwo />
      <Breadcrumbs title={data.name} menuText="Product Details" />
      <ProductDetails productDetails={data} />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const res = await getProductsData();
  return res.results.map((slug) => ({
    productId: slug.id.toString(),
  }));
}
