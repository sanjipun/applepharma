import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  const { productsDetails } = props;

  return (
    <>
      <div className="single-news product-single-image ">
        <div className="news-head-product-homepage single-image">
          <Link href={`/product-details/${productsDetails?.id}`}>
            <Image
              src={productsDetails?.photo}
              alt="#"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="news-body">
          <div className="new-content-extra">
            <h2 className="productImg-text">
              <Link href={`/product-details/${productsDetails?.id}`}>
                {productsDetails?.name}
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
