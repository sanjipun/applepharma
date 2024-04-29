"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";
import { links1 } from "../Header/Navbar/productsArray";

import Logo from "../../../public/img/logo.png";
import { getProductsCategory } from "@/services/api/product-api";

export default function MobileOffcanvas() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productCateroy, setProductCateroy] = useState({});

  // Function to toggle the sub-menu
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Function to check if a menu item is active
  const isActive = (path) => pathname === path;

  useEffect(() => {
    getProductsCategory().then((data) => {
      setProductCateroy(data);
    });
  }, []); 

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* <!-- Mobile Menu Modal --> */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo">
                <Link href="/">
                  <Image src={Logo} alt="#" width={134} height={50} />
                </Link>
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu-modal-main-body">
              {/* Offcanvas Menu */}
              <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                <ul id="nav" className="list-none offcanvas-men-list">
                  <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(1)}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(2)}
                      href="about"
                    >
                      About Us <i className="icofont-rounded-down"></i>
                    </Link>
                    <ul
                      className={`sub-menu ${openSubMenu === 2 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/doctors") ? "active" : ""}`}
                          href="/about"
                        >
                          Introduction
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/doctor-details") ? "active" : ""
                            }`}
                          href="/voices"
                        >
                          Chairman&apos;s Voice
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/doctor-details") ? "active" : ""
                            }`}
                          href="/voices/md-voice"
                        >
                          MD&apos;s Voice
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(3)}
                      href="#"
                    >
                      Products <i className="icofont-rounded-down"></i>
                    </Link>
                    <ul
                      className={`sub-menu ${openSubMenu === 3 ? "open" : ""}`}
                    >
                      {productCateroy?.results?.map((item) => (
                        <li key={item.id}>
                          <Link
                            onClick={handleClose}
                            className={` ${isActive(item.link) ? "active" : ""}`}
                            href={`/products-page/?category=${item.id}&name=${item.name}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(3)}
                      href="/gallary-page"
                    >
                      Gallery
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(4)}
                      href="#"
                    >
                      Pages <i className="icofont-rounded-down"></i>
                    </Link>
                    <ul
                      className={`sub-menu ${openSubMenu === 4 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/about") ? "active" : ""}`}
                          href="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/appointment") ? "active" : ""
                          }`}
                          href="/appointment"
                        >
                          Appointment
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/time-table") ? "active" : ""
                          }`}
                          href="/time-table"
                        >
                          Time Table
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/testimonials") ? "active" : ""
                          }`}
                          href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/pricing") ? "active" : ""}`}
                          href="/pricing"
                        >
                          Our Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/register") ? "active" : ""
                          }`}
                          href="/register"
                        >
                          Sign Up
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/login") ? "active" : ""}`}
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/faq") ? "active" : ""}`}
                          href="/faq"
                        >
                          Faq
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/mail-success") ? "active" : ""
                          }`}
                          href="/mail-success"
                        >
                          Mail Success
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/404") ? "active" : ""}`}
                          href="/404"
                        >
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(5)}
                      href="researchAndDevelopment"
                    >
                      R & D
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/contact") ? "active" : ""}`}
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/careers") ? "active" : ""}`}
                      href="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Mobile menu modal bottom */}
            {/* <div className="mobile-menu-modal-bottom">
              <Link href="/appointment" className="btn" onClick={handleClose}>
                Appointment
              </Link>
            </div> */}
          </div>
        </div>
      </Offcanvas>
      {/* <!-- End Mobile Menu Modal --> */}
    </>
  );
}
