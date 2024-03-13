import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilteredData from "../Reducers/FilterData";
import Pagination from "../Reducers/Pagination";
import FetchDataFromAPI from "../Reducers/FetchDataFromAPI";

export default function Kids() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);

  const FetchData = async () => {
    setLoading(true);
    try {
      const kidsProducts = await FetchDataFromAPI("kid");
      setData(kidsProducts);
      setLoading(false);
      setPerPage(kidsProducts.slice(0, 4));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  const getFiltered = (value) => {
    if (value === "all") {
      setFilterData(data);
      setPerPage(data.slice(0, 4));
    } else if (value === "t-shirt") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else if (value === "shirt") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else if (value === "dress") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else if (value === "watches") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else if (value === "boy-kid") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else if (value === "girl-kid") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else if (value === "shoes") {
      const datafilterd = FilteredData(data, value);
      setFilterData(datafilterd);
      setPerPage(datafilterd.slice(0, 4));
    } else {
      setFilterData(data);
      setPerPage(data.slice(0, 4));
    }
  };
  //  useEffect(() => {
  //    setPageNumber(1);
  //  }, [filterData]);

   const handler = (page) => {
     const pageNo = page.selected + 1;
    //  setPageNumber(pageNo);
     setPerPage(filterData.slice(pageNo * 4 - 4, pageNo * 4));
   };

  useEffect(() => {
    setFilterData(data);
  }, [data]);
  return (
    <div className="products-main-container">
      <div className="filter-container text-center">
        <img
          src={
            "https://www.jiomart.com/images/category/519/junior-boys-20200831.jpg"
          }
          alt="img"
          className="mb-4"
          width={"100%"}
        />
        <h4>Filter By</h4>
        <select onChange={(e) => getFiltered(e.target.value)}>
          <option value={"all"}>Select any one Option</option>
          <option value={"boy-kid"}>Boy Kid</option>
          <option value={"girl-kid"}>Girl Kid</option>
          <option value={"t-shirt"}>T-Shirts</option>
          <option value={"shirt"}>Shirts</option>
          <option value={"dress"}>Dresses</option>
          <option value={"watches"}>Watches</option>
          <option value={"shoes"}>Shoes</option>
        </select>
      </div>
      {!loading && (
        <h6 style={{ marginLeft: "4rem" }}>
          Showing {filterData.length} Products
        </h6>
      )}
      <div className="products-container d-flex justify-content-center align-items-center flex-wrap gap-4">
        {loading && (
          <div className="spinner-border text-warning men-spinner"></div>
        )}
        {!loading &&
          perPage.map((item) => {
            const { imgURL, name, salePrice, _id, maxPrice } = item;
            return (
              <div className="product-card" key={_id}>
                <img src={imgURL} alt="img1" />
                <h6>{name}</h6>
                <div>
                  Price -
                  <span className="" style={{ fontWeight: 700 }}>
                    Rs. {salePrice}/-
                  </span>
                  <span style={{ textDecoration: "line-through" }}>
                    Rs. {maxPrice}/-
                  </span>
                </div>
                <span>Free Delivery</span>
                <div className="buy-cart-btns d-flex align-items-center justify-content-center">
                  <Link to={`/kids/product-details/${_id}`}>More Details</Link>
                </div>
              </div>
            );
          })}
      </div>
      {filterData.length !== 0 && filterData.length > 4 && (
        <div className="pagination-container">
          <Pagination filterData={filterData} handler={handler} />
        </div>
      )}
    </div>
  );
}
