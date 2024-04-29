import Image from "next/image";
import Link from "next/link";
import BlogImg4 from "../../../public/img/medicineImg2.png";

export default function ProductCard(props) {
    const { productsDetails } = props;
    // console.log(props, "producct details");


    return (
        <>
            <div className="single-news product-single-image ">
                <div className="news-head-product-homepage single-image">
                    <Link href={`/product-details/?productId=${productsDetails?.id}&name=${productsDetails?.name}`} >
                        <Image
                            src={productsDetails?.photo ? productsDetails?.photo  : BlogImg4}
                            alt="#"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </div>
                <div className="news-body">
                    <div className="new-content-extra">
                        <h2 className="productImg-text">
                            <Link href={`/product-details/?productId=${productsDetails?.id}&name=${productsDetails?.name}`}>
                                {productsDetails?.name ? productsDetails?.name : "Medicine Name"}
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
