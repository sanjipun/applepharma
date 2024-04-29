import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHead from "@/components/SectionHead";

import Header from "@/components/Header/Header";
import DoctorSchedule from "./careers-component/DoctorSchedule";
import JobOpenings from "./careers-component/job-openings";
import PastOpenings from "./careers-component/past-openings";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { getJobCareerData } from "@/services/api/general-api";

export default async function TimeTable() {
  const carrer= await getJobCareerData();
  //  console.log(carrer);
  return (
    <>
      <HeaderTwo />

      <Breadcrumbs title="Careers" menuText="Careers" />

      <section className="doctor-calendar-area section">
        <div className="container">
          <div className="row gap-5  ">
            <div className="col-12">
              <JobOpenings currentOpenings={carrer} />
              {/* <DoctorSchedule /> */}
            </div>
            <div className="col-12">
              <PastOpenings pastOpenings={carrer} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
