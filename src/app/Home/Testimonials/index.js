import SectionHead from "@/components/SectionHead";
import SectionImg from "../../../../public/img/section-img2.png";
import Sliders from "./Sliders";

export default function Testimonial(props) {
  const { products } = props;
  // console.log(products);
  return (
    <>
      <section className="section testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Our Latest Products"
                img={SectionImg}
              />
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
