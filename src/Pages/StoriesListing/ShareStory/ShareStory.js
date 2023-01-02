import { useState, useEffect } from "react";
import Dropzone1 from "./DropZone/DropZone";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import Button from "react-bootstrap/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useNavigate } from "react-router-dom";
import { AddApi } from "../../../Api/Api";
import Loader from "../../Loader";
import { useDispatch, useSelector } from "react-redux";
import { storyAdded } from "../../../feature/zeplin/ZeplinSlice";
import { addStory } from "../../../feature/zeplin/ZeplinSlice";
import { getStory, getMission } from "../../../feature/zeplin/ZeplinSlice";
const ShareStory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [missionData, setMissionData] = useState([]);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();
  const { mission, isLoading } = useSelector((state) => state.mission);
  var imgarray = [
    "nourish.png",
    "plantation.png",
    "education.png",
    "grow.png",
    "animal.png",
    "csr.png",
  ];
  var UserImage = [
    { name: "Andrew Johson", image: "volunteer1.png" },
    { name: "Charles Vigue", image: "volunteer2.png" },
    { name: "Travis Steen", image: "volunteer3.png" },
    { name: "Charles Vigue", image: "volunteer4.png" },
    { name: "Travis Steen", image: "volunteer5.png" },
    { name: "Andrew Johson", image: "volunteer6.png" },
    { name: "Andrew Johson", image: "volunteer7.png" },
    { name: "Andrew Johson", image: "volunteer8.png" },
    { name: "Andrew Johson", image: "volunteer9.png" },
  ];
  const handleSubmit = () => {
    var user = UserImage[Math.floor(Math.random() * UserImage.length)];
    var data = JSON.stringify([
      {
        title: title,
        mission: type,
        date: date,
        url: url,
        description: JSON.stringify(
          convertToRaw(editorState.getCurrentContent())
        ),
        image: imgarray[Math.floor(Math.random() * imgarray.length)],
        uname: user.name,
        uimage: user.image,
      },
    ]);
    // AddApi(data, callbackafterSubmit, "story");
    dispatch(addStory(data)).then(() => {
      callbackafterSubmit();
    });
    console.log("submit");
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => navigate("/story"),
      autoClose: 2000,
    });
  };
  const handleSave = () => {
    console.log("data", type, title, date, url);
  };
  useEffect(() => {
    dispatch(getMission());
  }, []);
  return (
    <>
      <Loader loading={isLoading} />
      <ToastContainer position="top-center" />
      <hr />
      <div
        style={{
          margin: "0% 12%",
        }}
      >
        <div
          style={{
            fontSize: "36px",
            color: "#414141",
          }}
        >
          Share your story
        </div>
        <Row style={{ paddingTop: "14px" }}>
          <Col>
            <Form.Label>Select Mission</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              {/* <option value="DICTUM">Dictamen</option>
              <option value="CONSTANCY">Constancia</option>
              <option value="COMPLEMENT">Complemento</option> */}
              {mission.map((data, index) => {
                return (
                  <option value={data.type} key={index}>
                    {data.type}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label> My Story Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter story title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="Date"
              placeholder="Select date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "12px" }}>
          <Col>
            My Story
            <Editor
              toolbar={{
                options: ["inline"],
                inline: { inDropdown: false },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
              editorState={editorState}
              onEditorStateChange={setEditorState}
              editorStyle={{ border: "1px solid" }}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "14px" }}>
          <Col>
            <Form.Label> Enter Video URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "14px" }}>
          <Col>
            <Form.Label>Upload your Photos</Form.Label>
            <Dropzone1 />
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Button
              className="btn btn-primary btn-sm"
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "1.5px solid #414141",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                width: "85px",
              }}
            >
              Cancel
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
                width: "85px",
                margin: "12px",
              }}
              onClick={handleSave}
            >
              Save
            </Button>
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
                width: "85px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareStory;
