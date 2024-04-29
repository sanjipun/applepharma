"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links1 } from "./productsArray";
import { useEffect, useState } from "react";
import { getProductsCategory } from "@/services/api/product-api";

export default function Navbar() {

  const pathname = usePathname();
  const [productCateroy, setProductCateroy] = useState({});

  useEffect(() => {
    getProductsCategory().then((res) => {
      setProductCateroy(res);
    });
  }, []);

  function chunkArray(array, chunkSize) {
    let index = 0;

    const arrayLength = array?.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunkSize) {
      let chunk = array.slice(index, index + chunkSize);
      tempArray.push(chunk);
    }

    return tempArray;
  }

  const chunks = chunkArray(productCateroy?.results, 3);
  return (
    <>
      <div className="main-menu">
        <nav className="navigation">
          <ul className="nav menu">
            <li>
              <Link href="/">
                Home
              </Link>
              {/* <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/" ? "active" : ""}`}
                    href="/"
                  >
                    Home Page 1
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/home-2" ? "active" : ""}`}
                    href="/home-2"
                  >
                    Home Page 2
                  </Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="#">
                About <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/voices" ? "active" : ""
                      }`}
                    href="/voices"
                  >
                    Chairman&apos;s Voice
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/voices" ? "active" : ""
                      }`}
                    href="/voices/md-voice"
                  >
                    MD&apos;s Voice
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                Products <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown dropdown-products">
                <div className="container">
                  {chunks.map((chunk, chunkIndex) => (
                    <div className="row" key={chunkIndex}>
                      {chunk.map((item, itemIndex) => (
                        <div className="col-4" key={itemIndex}>
                          <li className="product-navList">
                            <Link
                              className={` ${pathname === "/products-page" ? "active" : ""}`}
                               href={`/products-page/?category=${item.id}&name=${item.name}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {/* <li>
                  <Link
                    className={` ${pathname === "/doctors" ? "active" : ""}`}
                    href="/products-page"
                  >
                    Apple
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/doctor-details" ? "active" : ""
                      }`}
                    href="/products-page"
                  >
                    Magnus
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* <li>
              <Link href="#">
                Services <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/service" ? "active" : ""}`}
                    href="/service"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/service-details" ? "active" : ""
                    }`}
                    href="/service-details"
                  >
                    Service Details
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <Link href="#">
                Pages <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/appointment" ? "active" : ""
                      }`}
                    href="/appointment"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/time-table" ? "active" : ""}`}
                    href="/time-table"
                  >
                    Time Table
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/testimonials" ? "active" : ""
                      }`}
                    href="/testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/pricing" ? "active" : ""}`}
                    href="/pricing"
                  >
                    Our Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/register" ? "active" : ""}`}
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/login" ? "active" : ""}`}
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/faq" ? "active" : ""}`}
                    href="/faq"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/mail-success" ? "active" : ""
                      }`}
                    href="/mail-success"
                  >
                    Mail Success
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/404" ? "active" : ""}`}
                    href="/404"
                  >
                    404 Error
                  </Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link href="/gallary-page">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/researchAndDevelopment">
                R & D
              </Link>

              {/* <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/blog-grid" ? "active" : ""}`}
                    href="/blog-grid"
                  >
                    Blog Grid
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/blog-single" ? "active" : ""
                      }`}
                    href="/blog-single"
                  >
                    Blog Details
                  </Link>
                </li>

              </ul> */}
            </li>
            <li>
              <Link href="#">
                Teams <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/teams" ? "active" : ""}`}
                    href="/teams"
                  >
                    Board OF Directors
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                className={` ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/careers" ? "active" : ""}`}
                href="/careers"
              >
                Career
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
