import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/Product-card";
import HeaderTwo from "@/components/Header/HeaderTwo";
import GalleryCard from "@/components/image-gallary/gallary-card";
import { getGalleryData } from "@/services/api/general-api";

export default async function Page() {

    const gallery = await getGalleryData();
    // console.log(gallery);   
    // const gallery =[
    //     {
    //         id:1,
    //         title:"Factory",
    //         image:"/Factory/thumbnail.jpeg",
    //         path:"/Factory"

    //     },
    //     {
    //         id:2,
    //         title:"Labs",
    //         image:"/Labs/thumbnail.jpg",
    //         path:"/Labs"
    //     }
    // ]
    return (
        <>
            <HeaderTwo />

            <Breadcrumbs title="Gallery " menuText="Gallery" />

            <section className="blog grid section">
                <div className="container">
                    <div className="row">
                        <div className=" col-12">
                            <div className="row">
                                {gallery?.results && gallery?.results.map((item) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                        <GalleryCard
                                            id={item.id}
                                            image={item.thumbnail}
                                            title={item.title}
                                            // path={item.path}
                                        />
                                    </div>
                                ))}
                               
                               
                                {/* <div className="col-12">
                                    <div className="pagination">
                                        <ul className="pagination-list">
                                            <li>
                                                <Link href="#">
                                                    <i className="icofont-rounded-left"></i>
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link href="#">1</Link>
                                            </li>
                                            <li>
                                                <Link href="#">2</Link>
                                            </li>
                                            <li>
                                                <Link href="#">3</Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icofont-rounded-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}
