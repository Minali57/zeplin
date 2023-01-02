import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import img from "./grow.png";
// import achieved from "./achieved.png";
import "./SingleCard.css";
import ReactStars from "react-rating-stars-component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BsArrowRightShort,
  BsClock,
  BsPersonCheck,
  BsHeart,
  BsPersonPlus,
  BsPerson,
  BsHeartFill,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MissionState } from "../../context/Context";
function SingleCard({ item, index }) {
  const {
    state: { fav, assign },
    dispatch,
  } = MissionState();
  console.log("fav", fav);
  console.log("assign", assign);
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log("navigate", id);
    navigate(`/mission/${id}`);
  };

  return (
    <>
      <Col>
        <Card style={{ marginBottom: "7%", height: "95%" }}>
          <Card.Img
            variant="top"
            // src={`../public/assets/item.image`}
            src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
            style={{ height: "9rem", width: "auto" }}
          />
          <Button
            className="btn btn-primary btn-sm "
            style={{
              backgroundColor: "white",
              color: "#414141",
              border: "2px solid white",
              borderRadius: "22px",
              position: "absolute",
              margin: "auto",
              top: "31%",
              left: "32%",
              fontSize: "14px",
            }}
          >
            {item.type}
          </Button>
          <div
            style={{
              fontSize: "13px",
              color: "white",
              position: "absolute",

              top: "3%",
              background: "black",
              opacity: "0.5",
              borderRadius: "20px",
              padding: "2px 5px",
            }}
          >
            <IoLocationOutline fontSize={"20px"} />
            <span data-testid="country-display">{item.country}</span>
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "white",
              position: "absolute",
              right: "3%",
              top: "3%",
              background: "black",
              opacity: "0.5",
              borderRadius: "20px",
              padding: "2px 5px",
            }}
          >
            <IoLocationOutline fontSize={"20px"} />
            {item.city}
          </div>
          {fav.some((c) => c === item._uuid) ? (
            <div
              style={{
                fontSize: "13px",
                color: "red",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "20%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_FAV",
                  payload: { _uuid: item._uuid },
                })
              }
            >
              <BsHeartFill strokeWidth={1} />
            </div>
          ) : (
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "20%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_FAV",
                  payload: item._uuid,
                })
              }
            >
              <BsHeart strokeWidth={1} />
            </div>
          )}
          {assign.some((c) => c === item._uuid) ? (
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "27%",
                background: "#000",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: { _uuid: item._uuid },
                })
              }
            >
              <BsPersonPlus strokeWidth={1} style={{ color: "red" }} />
            </div>
          ) : (
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "27%",
                background: "#000",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
              onClick={() =>
                dispatch({
                  type: "ASSIGN",
                  payload: item._uuid,
                })
              }
            >
              <BsPersonPlus strokeWidth={1} style={{ color: "green" }} />
            </div>
          )}
          {/* <div
            style={{
              fontSize: "13px",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              right: "3%",
              top: "27%",
              background: "#000",
              opacity: "0.5",
              borderRadius: "20px",
              padding: "2px 5px",
            }}
          >
            <BsPersonPlus strokeWidth={1} />
          </div> */}
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "17px",
                fontWeight: "normal",
                color: "#414141",
              }}
            >
              {item.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "10px",
                marginBottom: "3px",
                color: "#757575",
              }}
            >
              {item.description}
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card.Text
                style={{
                  fontSize: "14px",
                  color: "#414141",
                }}
              >
                {item.oragnization}
              </Card.Text>
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
            </div>
            {(item.ddate || item.progress || item.seats) && (
              <>
                <div
                  style={{ width: "114%", position: "relative", right: "7%" }}
                >
                  <hr style={{ marginTop: "0px" }} />
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
                    {item.target
                      ? item.target
                      : `From ${item.sdate} until ${item.edate}`}
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                  }}
                >
                  {item.seats > 0 && (
                    <>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {item.seatsLeft > 0 ? (
                          <BsPersonCheck fontSize={"14px"} />
                        ) : (
                          <BsPerson fontSize={"14px"} />
                        )}
                        <div style={{ marginLeft: "5px" }}>
                          <div>
                            {item.seatsLeft > 0 ? item.seatsLeft : item.seats}
                          </div>
                          <div style={{ color: "#888" }}>
                            {item.seatsLeft > 0
                              ? "Seats Left"
                              : "Already Voluntured"}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
                <div
                  style={{ width: "114%", position: "relative", right: "7%" }}
                >
                  <hr />
                </div>
              </>
            )}

            <button
              className="btn btn-primary btn-sm"
              style={{
                backgroundColor: "white",
                color: "orange",
                border: "2px solid orange",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                Bottom: "12px",
              }}
              data-testid={`submit-${index}`}
              onClick={() => handleClick(item._uuid)}
            >
              {item.ddate || item.progress || item.seats
                ? "apply"
                : "view details"}
              <BsArrowRightShort />
            </button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleCard;
