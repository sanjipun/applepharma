import { getProductsData } from "@/services/api/product-api";
import Funfact from "./Home/Funfact";
import Hero from "./Home/Hero";

import Testimonial from "./Home/Testimonials";
import WhyChoose from "./Home/WhyChoose";
import HeaderTwo from "@/components/Header/HeaderTwo";
import ModelPopUpComponent from "@/components/modelPopUp";
import { getAboutData, getValuesData } from "@/services/api/about-api";
import { getCompanyStatusData } from "@/services/api/general-api";

export default async function Home() {
  const data = await getAboutData();
  const values = await getValuesData();
  const companyStatus = await getCompanyStatusData();

  return (
    <>
      <HeaderTwo />
      <Hero sectionName="slider index2" />
      <WhyChoose data={data} values={values} />
      <Funfact companyStatus={companyStatus} />
      <Testimonial />
      <ModelPopUpComponent />
    </>
  );
}
