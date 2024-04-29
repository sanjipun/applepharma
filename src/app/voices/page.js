import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DoctorImg from "../../../public/Factory/KritanSir-Removed.png";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { getChairmanVoiceData } from "@/services/api/about-api";

export  default async function DoctorDetails() {
  const chairmanVoice = await getChairmanVoiceData();
  // console.log(chairmanVoice);

  return (
    <>
      <HeaderTwo />

      <Breadcrumbs title="Chairman's Voice" menuText="Chairman's Voice" />

      <div className="doctor-details-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image src={chairmanVoice?.image} alt="#" width={479} height={551} />

              </div>
            </div>
            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-name">
                    <h3 className="name">{chairmanVoice?.name}</h3>
                    <p className="deg">{chairmanVoice?.designation}</p>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Message</h3>
                    {chairmanVoice?.message && <div dangerouslySetInnerHTML={{__html: chairmanVoice?.message}}></div>}
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
