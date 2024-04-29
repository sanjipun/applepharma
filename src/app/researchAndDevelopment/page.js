import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";

import BlogImg1 from "../../../public/img/blog1.jpg";
import BlogImg2 from "../../../public/img/blog2.jpg";
import BlogImg3 from "../../../public/img/blog3.jpg";
import AuthorImg from "../../../public/img/author1.jpg";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { getResearchAndDevelopmentData } from "@/services/api/general-api";

export default async function BlogSingle() {
  const researchAndDevelopment= await getResearchAndDevelopmentData();
  // console.log(researchAndDevelopment);

  return (
    <>
      <HeaderTwo />

      <Breadcrumbs title="Research And Development" menuText="Research And Development" />

      <section className="news-single section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="single-main">
                    <div className="news-head single-image">
                      <Image src={researchAndDevelopment?.photo} alt="#" width={557} height={373} />
                    </div>

                    {researchAndDevelopment?.description && <div dangerouslySetInnerHTML={{__html: researchAndDevelopment?.description}}></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
