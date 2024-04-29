import About from "./About";
import OpenHour from "./OpenHour";

import Copyright from "./Copyright";
import Links from "./Links";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        {/* <!-- Footer Top --> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <About />
              <Links />
              <OpenHour />
            </div>
          </div>
        </div>
        {/* <!-- Copyright --> */}
        <Copyright />
      </footer>
    </>
  );
}
