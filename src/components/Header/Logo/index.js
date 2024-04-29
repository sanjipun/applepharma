import Image from "next/image";
import Link from "next/link";

// Theme Logo
import ThemeLogo from "../../../../public/img/logo.png";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image src={ThemeLogo} alt="#" width={100} height={37} />
        </Link>
      </div>
    </>
  );
}
