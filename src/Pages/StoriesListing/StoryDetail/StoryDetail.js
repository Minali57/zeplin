import { React, useState, useEffect, createContext } from "react";
import BottomText from "./BottomText/BottomText";
import SideText from "./SideText/SideText";
import { Row, Col } from "react-bootstrap";
import ImageSection from "../../VolunteerMission/Volunteer/ImageSection/ImageSection";
import { useParams } from "react-router-dom";
import { editData } from "../../../Api/Api";
import Loader from "../../Loader";
export const Story = createContext({});
const StoryDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("param", id);
    if (id !== undefined) {
      editData(id, callbackafterFetch, "story");
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
      <div style={{ margin: "0px 12%" }}>
        <Story.Provider value={data}>
          <Row>
            <Col xs={6}>
              <ImageSection type={false} />
            </Col>

            <Col xs={6}>
              <SideText />
            </Col>
          </Row>
          <Row>
            <Col>
              <BottomText />
            </Col>
          </Row>
        </Story.Provider>
      </div>
    </>
  );
};

export default StoryDetail;
