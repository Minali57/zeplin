import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { convertFromRaw, convertToRaw } from "draft-js";
import "./Card.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useParams } from "react-router-dom";
const SingleCard = ({ data }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.description) {
      const content = convertFromRaw(JSON.parse(data.description));
      setEditorState(EditorState.createWithContent(content));
      console.log("ids", data);
    }
  }, []);
  const handleClick = () => {
    navigate(`/storydetail/${data._uuid}`);
  };
  return (
    <Col
      style={{
        marginBottom: "1.5%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div data-testid="btn-story-detail">
        <Card style={{ width: "19rem" }}>
          <div class="imgContainer">
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/${data.image}`}
            />
            <div className="middle">
              {/* <div className="text"> */}{" "}
              <button
                style={{
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "22px",
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "center",
                  opacity: "0.8px",
                }}
                data-testid="btn-share-story"
                onClick={handleClick}
                className="btn"
              >
                view details
              </button>
              {/* </div> */}
            </div>
          </div>
          <Button
            className="btn btn-primary btn-sm "
            style={{
              backgroundColor: "white",
              color: "#414141",
              border: "2px solid white",
              borderRadius: "22px",
              position: "relative",
              bottom: "20px",
              width: "fit-content",
              fontSize: "14px",
              margin: "auto",
              left: "0",
              right: "0",
            }}
          >
            {data.mission}
          </Button>
          {/* {data.isBtn && (
          <Button
            style={{
              backgroundColor: "white",
              position: "relative",
              color: "black",
            }}
          >
            {data.btn}
          </Button>
        )} */}
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "17px",
                fontWeight: "normal",
                color: "#414141",
              }}
            >
              {data.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "10px",
                marginBottom: "3px",
              }}
            >
              {/* {data.description} */}
              <Editor
                editorState={editorState}
                readOnly
                toolbar={{
                  options: [],
                }}
              />
            </Card.Text>
            <div style={{ display: "flex", marginTop: "11px", gap: "10px" }}>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/volunteer/${data.uimage}`}
                  alt="vol1"
                  style={{ height: "28px", borderRadius: "40px" }}
                />
              </div>
              <div>{data.uname}</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default SingleCard;
