import SectionHead from "@/components/SectionHead";
import SectionImg from "../../../../public/img/section-img2.png";
import Sliders from "./Sliders";
import { getProductsData } from "@/services/api/product-api";

export default async function Testimonial() {
  const products = await getProductsData();
  return (
    <>
      <section className="section testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead title="Our Latest Products" img={SectionImg} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-12">
              <Sliders products={products} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
