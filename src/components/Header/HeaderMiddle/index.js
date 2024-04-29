import Link from "next/link";
import Logo from "../Logo";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderMiddle() {
  return (
    <>
      <div className="middle-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12 mobile-menu-sticky">
              <Logo />
              <MobileOffcanvas />
            </div>
            <div className="col-lg-9 col-md-9 col-12 align-content-center ">
              <div className="widget-main">
                <div className="single-widget">
                  <i className="icofont-ui-call"></i>
                  <p>Call us anytime</p>
                  <a href="tel:+977152422817"><h4>+977 15242817</h4></a>
                </div>

                <div className="single-widget">
                  <i className="icofont-clock-time"></i>
                  <p>Opening Time</p>
                  <h4>Sun-Fri: 10:00am-5:30pm</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
