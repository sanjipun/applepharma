"use client";

import useStickyHeader from "./useStickyHeader";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Logo from "../Logo";

export default function HeaderInner2() {
  const { isSticky } = useStickyHeader();

  return (
    <>
      <div className={`header-inner ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-2 ">
                <Logo />
              </div>
              <div className={`col-10 align-content-center`}>
                <Navbar />
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
