"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchResults from "./search-results";
import { getProductsData } from "@/services/api/product-api";

export default function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    productId: "",
  });
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSearchClick = () => {
    setIsActive(!isActive);
  };
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase()  
    setInputs(lowerCase);

  }

 useEffect(() => {
        if (inputs != '') {
            setShowSearchResults(true);
        }else{
            setShowSearchResults(false);
        }

        getProductsData().then((data) => {
            setProducts(data?.results)
        });
    }, [inputs]);

    const handleItemClick = (clickedText) => {
      setInputs(clickedText);
      setShowSearchResults(false);
    };

    // console,log(products, "products")
    // console.log(inputs, "inputs");

  return (
    <>
      <div className="right-bar">
        <div className={`search-top ${isActive ? "active" : ""}`}>
          <div className="search">
            <div className="search-icon" onClick={handleSearchClick}>
              <i className="icofont-search-1"></i>
            </div>
          </div>
          <form className="search-form" >
            <input type="text" placeholder="search" onChange={inputHandler} name="search" value={inputs?.name}/>
            {/* <button value="search" >
              <i className="icofont-search-1"></i>
            </button> */}
            {showSearchResults?<SearchResults inputs={inputs} onItemClick={handleItemClick} products={products} />:null}
          </form>
         
        </div>
      </div>
    </>
  );
}
