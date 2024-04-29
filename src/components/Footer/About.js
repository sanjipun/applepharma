import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="col-lg-5 col-md-6 col-12">
        <div className="col-10 single-footer">
          <h2>About Us</h2>
          <p>
            Apple International Pharmaceuticals is a A WHO-GMP Certified Medicine Manufacturing Company. We pledge to commit to the long term success of our employees and shareholders and aspire to become a leading pharmaceutical company through Innovation, Expertise, Quality and Competence.
          </p>

          <ul className="social">
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100069103209390" target="#">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/apple.pharma?igsh=MWFlYmVua3IxdDhpNA==" target="#">
                <i className="icofont-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/apple-international-pharmaceuticals-938b31215/?originalSubdomain=np" target="#">
              <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
