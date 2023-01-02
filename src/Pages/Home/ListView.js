import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BsArrowRightShort,
  BsClock,
  BsPersonCheck,
  BsHeart,
  BsPersonPlus,
  BsPerson,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
const ListView = ({ item }) => {
  return (
    <>
      <Card
        style={{
          width: "36rem",
          margin: "auto",
          marginBottom: "30px",
        }}
      >
        <Row style={{ marginBottom: "12px" }}>
          <Col>
            <div>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
                style={{ height: "12rem", width: "21rem" }}
              />
              <Button
                className="btn btn-primary btn-sm "
                style={{
                  backgroundColor: "white",
                  color: "#414141",
                  border: "2px solid white",
                  borderRadius: "22px",
                  position: "relative",
                  margin: "auto",
                  bottom: "12px",
                  fontSize: "14px",
                  left: "114px",
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
                {item.country}
              </div>
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "white",
                position: "absolute",
                right: "44%",
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
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "44%",
                top: "40%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <BsHeart strokeWidth={1} />
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "44%",
                top: "50%",
                background: "#000",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              {/* <img src={ppl} alt="" /> */}
              <BsPersonPlus strokeWidth={1} />
            </div>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "15px",
                  fontWeight: "normal",
                  color: "#414141",
                }}
              >
                {item.title}
              </Card.Title>
            </Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
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
                  style={{
                    width: "108%",
                    position: "relative",
                    right: "8%",
                  }}
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
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
                            {" "}
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <BsClock fontSize={"14px"} />
                        <div style={{ marginLeft: "5px" }}>
                          <div> {item.ddate}</div>
                          <div style={{ color: "#888" }}> Deadline</div>
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
                            style={{
                              height: "14px",
                              marginRight: "5px",
                            }}
                          />
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                          <div>
                            <ProgressBar
                              variant="warning"
                              now={item.progress}
                              style={{
                                height: "6px",
                                width: "210%",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              color: "#888",
                              paddingTop: "5px",
                            }}
                          >
                            {" "}
                            {item.progress}% achieved
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  style={{
                    // width: "114%",
                    width: "108%",
                    position: "relative",
                    right: "8%",
                  }}
                >
                  <hr />
                </div>
              </>
            )}
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
          }}
        >
          {item.ddate || item.progress || item.seats ? "apply" : "view details"}{" "}
          <BsArrowRightShort />
        </Button>
      </Card>
    </>
  );
};

export default ListView;
