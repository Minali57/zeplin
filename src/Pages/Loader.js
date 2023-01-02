import React, { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
  display: "block",
  margin: "10% auto",
  borderColor: "#55AAFF",
};
const Loader = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        // data-testid="loader"
      />
    </div>
  );
};

export default Loader;
