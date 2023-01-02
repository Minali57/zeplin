import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import { Image } from "../Images/Image";
import "./ImageSection.css";
import ImageGallery from "react-image-gallery";
import { useContext } from "react";
import { Mission } from "../Volunteer";
import { Story } from "../../../StoriesListing/StoryDetail/StoryDetail";
const ImageSection = ({ type }) => {
  var dataMission = useContext(Mission);
  var dataStory = useContext(Story);

  const img = [
    {
      original: `/assets/${type ? dataMission.image : dataStory.image}`,
      thumbnail: `/assets/${type ? dataMission.image : dataStory.image}`,
    },
    ...Image,
  ];
  console.log("img", img);
  return (
    <>
      <ImageGallery
        items={img}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        infinite={false}
      />
    </>
  );
};

export default ImageSection;
