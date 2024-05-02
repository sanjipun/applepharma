"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";
import { links1 } from "../Header/Navbar/productsArray";

import Logo from "../../../public/img/logo.png";
import { getProductsCategory } from "@/services/api/product-api";
import { getDepartment, getTeamMembers } from "@/services/api/about-api";

export default function MobileOffcanvas() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubMenu1, setOpenSubMenu1] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productCateroy, setProductCateroy] = useState({});
  const [department, setDepartment] = useState({});

  // Function to toggle the sub-menu
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  const toggleSubMenu1 = (index) => {
    setOpenSubMenu1(openSubMenu1 === index ? null : index);
  }

  // Function to check if a menu item is active
  const isActive = (path) => pathname === path;

  useEffect(() => {
    getProductsCategory().then((data) => {
      setProductCateroy(data);
    });
    getDepartment().then((data) => {
      // console.log(data);
      setDepartment(data);
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
                  <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(6)}
                      href="#"
                    >
                      Teams <i className="icofont-rounded-down"></i>
                    </Link>
                    <ul
                      className={`sub-menu ${openSubMenu === 6 ? "open" : ""}`}
                    >

                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/") ? "active" : ""}`}
                          href="/teams"
                        >
                          Board Of Directors
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="menu-arrow"
                          onClick={() => toggleSubMenu1(7)}
                          href="#"
                        >
                          Departments<i className="icofont-rounded-down"></i>
                        </Link>
                        <ul
                          className={`sub-menu ${openSubMenu === 6 && openSubMenu1 ===7 ? "open" : ""}`}
                        >
                          {department?.results?.map((item) => (
                            <li key={item.id}>
                              <Link
                                onClick={handleClose}
                                className={` ${isActive(item.link) ? "active" : ""}`}
                                href={`/teams/departments/?department=${item.id}`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
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
