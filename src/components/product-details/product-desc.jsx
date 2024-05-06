"use client";

import React from "react";

export const ProductDesc = (props) => {
  const { productDetails } = props;
  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleButtonClick = (id) => {
    setSelectedTab(id);
  };

  const productHead = [
    {
      id: 1,
      title: "Indications",
      icon: "icofont-list",
    },
    {
      id: 2,
      title: "Dosage",
      icon: "icofont-medicine",
    },
    {
      id: 3,
      title: "Mode Of Action",
      icon: "icofont-first-aid",
    },
    {
      id: 4,
      title: "Packing",
      icon: "icofont-package",
    },
  ];

  const productsDes = [
    {
      id: 1,
      desc: productDetails?.indications
        ? productDetails?.indications
        : "Prefer Doctors Consultation Before Use.",
    },
    {
      id: 2,
      desc: productDetails?.dosage
        ? productDetails?.dosage
        : "Prefer Doctors Consultation Before Use.",
    },
    {
      id: 3,
      desc: productDetails?.mode_of_action
        ? productDetails?.mode_of_action
        : "Prefer Doctors Consultation Before Use.",
    },
    {
      id: 4,
      desc: productDetails?.packing
        ? productDetails?.packing
        : "Contact Our Head Office.",
    },
  ];

  return (
    <div className="productDetails-text">
      <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
        {productHead.map((product, index) => (
          <li key={product.id} className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                selectedTab === product.id ? "active" : null
              }`}
              onClick={() => handleButtonClick(product.id)}
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <i className={product.icon}></i>
              {product.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {productsDes.map((item) => {
          if (item.id === selectedTab) {
            return (
              <div
                key={item.id}
                className="tab-pane fade show active "
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                {item.desc}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
