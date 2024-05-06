import Link from "next/link";
import Logo from "../Logo";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderMiddle() {
  return (
    <>
      <div className="middle-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mobile-menu-sticky">
              <Logo />
              <MobileOffcanvas />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
