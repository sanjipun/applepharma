import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className=" col-10 single-footer f-link">
          <h2>Quick Links</h2>
          <div className="row">
            <div className="col-12">
              <ul style={{width:"100%"}}>
                <li>
                  <Link href="/">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/voices">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Chairman&apos; Voice
                  </Link>
                </li>
                <li>
                  <Link href="/voices">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    MD&apos;s Voice
                  </Link>
                </li>
                <li>
                  <Link href="gallary-page">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/researchAndDevelopment">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Research & Development
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
