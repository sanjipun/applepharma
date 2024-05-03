import Breadcrumbs from "@/components/Breadcrumbs";
import TeamCard from "@/components/TeamCard";

import TeamImg1 from "../../../public/img/team1.jpg";
import TeamImg2 from "../../../public/img/team2.jpg";
import TeamImg3 from "../../../public/img/team3.jpg";
import TeamImg4 from "../../../public/img/team4.jpg";
import TeamImg5 from "../../../public/Factory/KritanSir-Removed.png";
import Header from "@/components/Header/Header";
import { getBODSData } from "@/services/api/about-api";
import HeaderTwo from "@/components/Header/HeaderTwo";

export default async function Doctors() {
  const BODS= await getBODSData();
  // console.log(BODS);


  const teamsProfiles = [
    {
      tilt: "tilt-disable",
      image: TeamImg5,
      name: "Ktian Awal",
      designation: "Managing Director"

    },
    {
      tilt: "tilt-disable",
      image: TeamImg5,
      name: "Ktian Awal1",
      designation: "Managing Director"

    },
    {
      tilt: "tilt-disable",
      image: TeamImg5,
      name: "Ktian Awal2",
      designation: "Managing Director"

    },
    {
      tilt: "tilt-disable",
      image: TeamImg5,
      name: "Ktian Awal3",
      designation: "Managing Director"

    },

  ]
  return (
    <>
      <HeaderTwo />

      <Breadcrumbs title="Board Of Directors" menuText="Teams" />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row justify-content-center">
            {BODS?.results && BODS?.results.map((teamProfile, index) => (
              <div className="col-lg-3 col-md-6 col-12" key={teamProfile.id}>
                <TeamCard
                  tilt={"tilt-disable"}
                  image={teamProfile?.photo}
                  name={teamProfile?.name}
                  designation={teamProfile?.designation}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
