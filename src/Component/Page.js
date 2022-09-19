import React from "react";

import "./Page.css";
const Page = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail = item.thumb;
  let title = item.external;
  let cheapest = item.cheapest;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div>
              <h2>Game Name:-{title}</h2>
            </div>
            <br />

            <h3>Price:-${cheapest}</h3>

            <button className="btn-search">Get Deals</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
