import { React, useContext } from "react";
import "./SideText.css";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import ReactStars from "react-rating-stars-component";
import { BsPersonCheck, BsHeart, BsPersonPlus } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Col, Row } from "react-bootstrap";
import { BsGlobe } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsPerson, BsClock, BsHeartFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Mission } from "../Volunteer";
import { MissionState } from "../../../context/Context";
const SideText = () => {
    const {
      state: { fav },
      dispatch,
    } = MissionState();
  const item = useContext(Mission);
  console.log("dat", item);
  return (
    <div style={{ padding: "22px" }}>
      <span className="sidetext">{item?.title}</span>
      <div style={{ fontSize: "14px" }}>{item?.description}</div>
      <div style={{ width: "114%", position: "relative", right: "7%" }}>
        <hr />
        <Button
          className="btn btn-primary btn-sm"
          style={{
            backgroundColor: "white",
            color: "#414141",
            border: "1px solid grey",
            borderRadius: "22px",
            fontSize: "9px",
            position: "absolute",
            bottom: "-11px",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "fit-content",
          }}
        >
          {item?.target
            ? item?.target
            : `From ${item?.sdate} until ${item?.edate}`}
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingTop: "0px",
          marginTop: "0px",
          paddingBottom: "0px",
          marginBottom: "0px",
        }}
      >
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <BsPersonCheck fontSize={"14px"} />

          <div
            style={{ marginLeft: "5px", color: "#757575", fontSize: "14px" }}
          >
            <div> 10</div>
            <div> Seats left</div>
          </div>
        </div> */}
        {item.seats > 0 && (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              {item.seatsLeft > 0 ? (
                <BsPersonCheck fontSize={"14px"} />
              ) : (
                <BsPerson fontSize={"14px"} />
              )}
              <div style={{ marginLeft: "5px" }}>
                <div>{item.seatsLeft > 0 ? item.seatsLeft : item.seats}</div>
                <div style={{ color: "#888" }}>
                  {item.seatsLeft > 0 ? "Seats Left" : "Already Voluntured"}
                </div>
              </div>
            </div>
          </>
        )}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "72px",
          }}
        >
          <div>
            <img
              //   src="achieved.png"
              src={`${process.env.PUBLIC_URL}/assets/achieved.png`}
              alt="aim"
              style={{ height: "14px", marginRight: "5px" }}
            />
          </div>
          <div style={{ paddingTop: "5px" }}>
            <div>
              <ProgressBar
                variant="warning"
                now={70}
                style={{ height: "6px", width: "210%" }}
              />
            </div>
            <div
              style={{ paddingTop: "5px", color: "#757575", fontSize: "14px" }}
            >
              {" "}
              8000 achieved
            </div>
          </div>
        </div> */}
        {item.ddate && !item.progress && (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BsClock fontSize={"14px"} />
              <div style={{ marginLeft: "5px" }}>
                <div> {item.ddate}</div>
                <div style={{ color: "#888" }}>Deadline</div>
              </div>
            </div>
          </>
        )}
        {item.progress && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "72px",
              }}
            >
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/achieved.png`}
                  alt="aim"
                  style={{ height: "14px", marginRight: "5px" }}
                />
              </div>
              <div style={{ paddingTop: "5px" }}>
                <div>
                  <ProgressBar
                    variant="warning"
                    now={item.progress}
                    style={{ height: "6px", width: "210%" }}
                  />
                </div>
                <div style={{ color: "#888", paddingTop: "5px" }}>
                  {item.progress}% achieved
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <hr style={{ marginTop: "0" }} />
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      <Row>
        <Col>
          {fav.some((c) => c === item._uuid) ? (
            <button
              className="btn bg-transparent "
              style={{
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #757575",
                borderRadius: "20px",
                fontSize: "12px",
                width: "100%",
                color: "red",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_FAV",
                  payload: { _uuid: item._uuid },
                })
              }
            >
              <BsHeartFill /> Favourite
            </button>
          ) : (
            <button
              className="btn bg-transparent "
              style={{
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #757575",
                borderRadius: "20px",
                fontSize: "12px",
                width: "100%",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_FAV",
                  payload: item._uuid,
                })
              }
            >
              <BsHeart /> Add to Favourite
            </button>
          )}
        </Col>
        <Col>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #757575",
              borderRadius: "20px",
              fontSize: "12px",
              width: "100%",
            }}
          >
            <BsPersonPlus /> Recommended to a Co-Worker
          </button>
        </Col>
      </Row>
      {/* </div> */}

      <div style={{ width: "100%", position: "relative" }}>
        <hr style={{ top: "0px" }} />
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            margin: "auto",
            background: "#fff",
            width: "fit-content",
            top: "-11px",
          }}
        >
          {item.rating && (
            <ReactStars
              value={item.rating}
              count={5}
              size={15}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="orange"
            />
          )}
        </div>
      </div>
      <Row>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <IoLocationOutline fontSize={"20px"} />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "300", color: " #757575" }}
            >
              City
            </div>
            <div style={{ fontSize: "12px", color: "#414141" }}>
              {" "}
              {item.city}
            </div>
          </Col>
        </Col>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <BsGlobe fontSize={"18px"} />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "300", color: " #757575" }}
            >
              Theme
            </div>
            <div style={{ fontSize: "12px", color: "#414141" }}>
              {item.type}
            </div>
          </Col>
        </Col>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <BsCalendar3 fontSize={"18px"} />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "300", color: " #757575" }}
            >
              date
            </div>
            <div style={{ fontSize: "12px", color: "#414141" }}>
              {item.sdate}
            </div>
          </Col>
        </Col>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <BsPerson fontSize={"20px"} />
            </div>
            <div
              style={{ fontSize: "10px", fontWeight: "300", color: " #757575" }}
            >
              Organization
            </div>
            <div style={{ fontSize: "12px", color: "#414141" }}>
              {item.oragnization}
            </div>
          </Col>
        </Col>
      </Row>
      <Button
        className="btn btn-primary btn-sm"
        style={{
          backgroundColor: "white",
          color: "orange",
          border: "2px solid orange",
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          height: "32px",
          width: "30%",
          paddingTop: "2px",
          marginTop: "10px",
        }}
      >
        Apply <BsArrowRightShort />
      </Button>
    </div>
  );
};

export default SideText;
