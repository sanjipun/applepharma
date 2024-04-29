import Image from "next/image";
import Link from "next/link";

import BlogImg1 from "../../../public/img/blog1.jpg";
import BlogImg2 from "../../../public/img/medicineImg.jpg";
import BlogImg3 from "../../../public/img/medicineImg1.jpg";
import BlogImg4 from "../../../public/img/medicineImg2.png";

export default function GalleryCard(props) {
    const { id, image, date, title, desc } = props;

    return (
        <>
            <div className="single-news product-single-image ">
                <div className="news-head single-image">
                    <Link href={`/image-gallary/?id=${id}`}>
                        <Image
                            src={image ? image : BlogImg4}
                            alt="#"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </div>
                <div className="news-body">
                    <div className="new-content-extra">
                        <h2 className="productImg-text">
                            <Link href={`/image-gallary/?id=${id}`}>
                                {title ? title : "Factory"}
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
