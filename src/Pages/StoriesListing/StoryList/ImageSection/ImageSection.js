import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const ImageSection = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage:
          `url(` + process.env.PUBLIC_URL + `/assets/volunteer/Grow4.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "220px",
        backgroundPosition: "center",
        backgroundPositionY: "35%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: " 0.6",
          color: "white",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "34px",
          flexDirection: "column",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error maiores
        suscipit veritatis, autem odit quibusdam eaque laudantium, sequi
        accusamus veniam, a quis temporibus?
        <button
          style={{
            color: "white",
            border: "2px solid white",
            borderRadius: "22px",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            opacity: "0.8px",
          }}
          data-testid="btn-share-story"
          onClick={() => navigate("/sharestory")}
          className="btn btn-primary"
        >
          Share your Story
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
