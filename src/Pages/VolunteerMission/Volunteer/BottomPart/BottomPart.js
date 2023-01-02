import { Data } from "../../../../Data";
import SingleCard from "../../../Home/SingleCard/SingleCard";
import { Row } from "react-bootstrap";
const BottomPart = () => {
  return (
    <>
      <div style={{ padding: "10%", paddingTop: "0px", paddingBottom: "0px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
            fontWeight: "300",
            color: "#414141",
          }}
        >
          Related Missions
        </div>

        <Row xs={1} md={2} lg={3}>
          {Data.slice(3, 6).map((item, index) => {
            return <SingleCard item={item} key={index} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default BottomPart;
