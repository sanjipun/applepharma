import HeaderTwo from "@/components/Header/HeaderTwo";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <HeaderTwo />
            <section className="error-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-12">
                            <div className="error-inner">
                                <h1>
                                    404<span>Oop&apos;s sorry we can&apos;t find that page!</span>
                                </h1>
                                <br></br>
                                <br></br>
                                <Link href="/" className="btn">
                                    Go Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
