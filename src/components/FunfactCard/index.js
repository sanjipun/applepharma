"use client";

import CountUp from "react-countup";

export default function FunfactCard(props) {
  const { icon, number, desc } = props;

  return (
    <>
      <div className="single-fun">
        <i className={icon ? icon : "icofont icofont-home"}></i>
        <div className="content">
          <div className="funfact-inner">
            <span className="counter">
              <CountUp end={number ? number : "3468"} delay={1} enableScrollSpy />
            </span>
            <span style={{marginTop:"-7px"}}>+</span>

          </div>
          <p>{desc ? desc : "Hospital Rooms"}</p>
        </div>
      </div>
    </>
  );
}
