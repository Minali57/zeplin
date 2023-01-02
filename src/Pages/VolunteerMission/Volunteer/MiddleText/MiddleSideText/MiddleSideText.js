import React from "react";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ReactStars from "react-rating-stars-component";
// import { volunteerImg } from "./VolunteerImage";
import { volunteerImg } from "../../VolunteerImage/VolunteerImage";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
const MiddleSideText = () => {
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Information</th>
            <th></th>
          </tr>
          <tr>
            <td>skills</td>
            <td>Cool, Easy going, Math, Computer</td>
          </tr>
          <tr>
            <td>Days</td>
            <td>Weekend only</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <div style={{ display: "flex", gap: "8px" }}>
                <ReactStars
                  count={5}
                  size={15}
                  edit={true}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="orange"
                />
                <span>(by 125 volunteers) </span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table border={1}>
        <span style={{ padding: "12px" }}>Recent Volunteers</span>
        <Row style={{ padding: "12px" }}>
          {volunteerImg.map((vol) => (
            <Col xs={4} style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/volunteer/${vol.img}`}
                alt="Volunteer img"
                style={{ borderRadius: "42px", width: "70px", height: "70px" }}
              />
              <span style={{ fontSize: "13px", padding: "0" }}>{vol.name}</span>
            </Col>
          ))}
        </Row>
        <hr />
        <Row>
          <Col xs={2} style={{ paddingLeft: "35px" }}>
            &lt;
          </Col>
          <Col xs={8} s>
            1-8 of 25 Recent Volunteers{" "}
          </Col>
          <Col xs={2}>&gt;</Col>
        </Row>
      </Table>
    </>
  );
};

export default MiddleSideText;
