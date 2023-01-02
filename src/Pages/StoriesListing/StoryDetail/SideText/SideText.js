import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { Story } from "../StoryDetail";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
const SideText = () => {
  const data = useContext(Story);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    if (data.description) {
      const content = convertFromRaw(JSON.parse(data.description));
      setEditorState(EditorState.createWithContent(content));
    }
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <img
            src={`/assets/volunteer/${data.uimage}`}
            alt="vol2"
            style={{ borderRadius: "42px", width: "70px", height: "70px" }}
          />
          <div> {data.uname}</div>
        </div>
        <div>
          <Button
            className="btn btn-primary btn-sm "
            style={{
              backgroundColor: "white",
              color: "#414141",
              borderRadius: "22px",
              fontSize: "14px",
              border: "1px solid black",
            }}
          >
            12,000 Views
          </Button>
        </div>
      </div>
      <div
        style={{
          fontWeight: "300",
          lineHeight: "1.53",
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
      </div>
      <Row>
        <Col xs={8}>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              border: "1.5px solid #757575",
              borderRadius: "20px",
              fontSize: "14px",
              width: "100%",
            }}
          >
            <BsPersonPlus /> Recommended to a Co-Worker
          </button>
        </Col>
        <Col>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              color: "orange",
              border: "1.5px solid orange",
              borderRadius: "20px",
              fontSize: "14px",
              width: "100%",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            Open Mission <BsArrowRightShort size={30} />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default SideText;
