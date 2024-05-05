import Link from "next/link";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-link">
                <li>
                    <Link href="https://www.facebook.com/profile.php?id=100069103209390"><i className="icofont-facebook"></i></Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/apple.pharma?igsh=MWFlYmVua3IxdDhpNA=="><i className="icofont-instagram"></i></Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/apple-international-pharmaceuticals-938b31215/?originalSubdomain=np"><i className="icofont-linkedin"></i></Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li>
                  <Link href="tel:+97715242817">
                    <i className="fa fa-phone"></i>+977 15242817
                  </Link>

                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link href="mailto:apple.intpharma@gmail.com">
                    apple.intpharma@gmail.com
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
