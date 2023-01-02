import React from "react";
import "./Footer.css";
import { BsX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      {/* <div style={{ float: "right", color: "black" }}>
        <BsX size={"20px"} />
      </div> */}
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignContent: "center",
          padding: "20px 15%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <div
            style={{
              fontSize: "13px",
              // color: "#fefefe",
              color: "#fefefe",
              fontWeight: "350",
            }}
          >
            This website makes use of cookies to enhance browsing experience and
            provide additional functionality.
          </div> */}
          <div style={{ fontSize: "14px" }}>
            <a href="/" style={{ color: "black", textDecoration: "none" }}>
              Privacy policy
            </a>
          </div>
        </div>
        <div>
          <button
            className="btn bg-transparent "
            style={{
              border: "2px solid orange",
              borderRadius: "20px",
              fontSize: "14px",
              padding: "3px 7px",
              color: "orange",
              width: "80px",
            }}
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
