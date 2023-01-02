import React, { useState, useEffect } from "react";
import ImageSection from "./ImageSection/ImageSection";
import SingleCard from "./Card/Card";
import { StoriData } from "./storydata";
import Row from "react-bootstrap/Row";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { getStory } from "../../../feature/zeplin/ZeplinSlice";
const override: CSSProperties = {
  display: "block",
  margin: "auto auto",
  borderColor: "#39445a",
  position: "absolute",
  left: "45%",
  top: "45%",
};
const StoriesListing = () => {
  const dispatch = useDispatch();
  const { story, isLoading } = useSelector((state) => state.mission);
 
  useEffect(() => {
    dispatch(getStory());
  }, []);
  return (
    <>
      <ClipLoader loading={isLoading} cssOverride={override} size={50} />
      <ImageSection />
      <div style={{ padding: "35px 135px" }}>
        <Row xs={1} md={2} lg={3}>
          {story.map((data, index) => {
            return <SingleCard data={data} key={index} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default StoriesListing;
