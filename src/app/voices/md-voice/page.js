import Image from "next/image";
import Link from "next/link";
import DoctorImg from "../../../../public/Factory/KritanSir-Removed.png";
import HeaderTwo from "@/components/Header/HeaderTwo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getMDSVoiceData } from "@/services/api/about-api";


export default async function DoctorDetails() {
  const mdVoice = await getMDSVoiceData();
  // console.log(mdVoice);
  return (
    <>
      <HeaderTwo />
      <Breadcrumbs title="Managing Director's Voice" menuText="MD's Voice" />

      <div className="doctor-details-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image src={mdVoice?.image} alt="#" width={479} height={551} />

              </div>
            </div>
            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-name">
                    <h3 className="name">{mdVoice?.name}</h3>
                    <p className="deg">{mdVoice?.designation}</p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Message</h3>
                   {mdVoice?.message && <div dangerouslySetInnerHTML={{__html: mdVoice?.message}}></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
