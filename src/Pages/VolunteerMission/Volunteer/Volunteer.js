import { React, useState, useEffect, createContext } from "react";
import "./Volunteer.css";
import { Col, Row } from "react-bootstrap";
import ImageSection from "./ImageSection/ImageSection";
import SideText from "./SideText/SideTexr";
import BottomPart from "./BottomPart/BottomPart";
import MiddleText from "./MiddleText/MiddleText";
import { useParams } from "react-router-dom";
import { editData } from "../../../Api/Api";
import Loader from "../../Loader";
export const Mission = createContext({});
const Volunteer = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("param", id);
    if (id !== undefined) {
      editData(id, callbackafterFetch, "mission");
    }
    window.scrollTo(0, 0);
  }, []);
  const callbackafterFetch = async (editData) => {
    setData(editData);
    setLoading(false);
  };

  return (
    <>
      <Loader loading={loading} />
      <div style={{ padding: "0px 120px" }}>
        <Mission.Provider value={data}>
          <Row>
            <Col xs={6}>
              <ImageSection type={true} />
            </Col>

            <Col xs={6}>
              <SideText />
            </Col>
          </Row>
          <Row>
            <Col>
              <MiddleText />
            </Col>
          </Row>
          <hr />
          <BottomPart />
        </Mission.Provider>
      </div>
    </>
  );
};

export default Volunteer;
