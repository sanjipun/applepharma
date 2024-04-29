import Breadcrumbs from "@/components/Breadcrumbs";
import AboutSection from "./about-components/AboutSection";
import Vission from "./about-components/Vission";
import Mission from "./about-components/Mission";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { getAboutData, getValuesData } from "@/services/api/about-api";


export default async function About() {
  const data= await getAboutData();
  const values= await getValuesData();
  // console.log(data);
  // console.log(values);
  return (
    <>
      <HeaderTwo />
      <Breadcrumbs title="About Us" menuText="About Us" />
      <AboutSection data={data} />
      <Vission data={data} />
      <Mission values={values} />
    </>
  );
}