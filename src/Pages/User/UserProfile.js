import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import "./UserProfile.css";
import { Modal } from "react-bootstrap";

const options = [
  { value: "Anthropology", label: "Anthropology" },
  { value: "Archeology", label: "Archeology" },
  { value: "Astronomy", label: "Astronomy" },
  { value: "Computer Science", label: "Computer Science" },
  { value: "Environmental Science", label: "Environmental Science" },
  { value: "History", label: "History" },
  { value: "Library Sciences", label: "Library Sciences" },
  { value: "Mathematics", label: "Mathematics" },
  { value: "Music Theory", label: "Music Theory" },
  { value: "Research", label: "Research" },
  { value: "Administrative Support", label: "Administrative Support" },
  { value: "Customer Service", label: "Customer Service" },
  { value: "Data Entry", label: "Data Entry" },
  { value: "Executive Admin", label: "Executive Admin" },
  { value: "Office Management", label: "Office Management" },
  { value: "Office Reception6", label: "Office Reception" },
];
const UserProfile = () => {
  const [personInfo, setPersonInfo] = useState({
    name: "",
    surname: "",
    eId: "",
    manager: "",
    title: "",
    department: "",
    profile: "",
    volunteer: "",
    city: "",
    url: "",
    type: "",
    availibility: "",
  });
  const [skill, setSkill] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonInfo({ ...personInfo, [name]: value });
  };
  const handleClick = () => {
    console.log("data", personInfo.name);
    setPersonInfo({
      name: "",
      surname: "",
      eId: "",
      manager: "",
      title: "",
      department: "",
      profile: "",
      volunteer: "",
      city: "",
      url: "",
      type: "",
      availibility: "",
    });
    setSkillInput("");
    setSkill([]);
  };

  const btnClickAddSkill = () => {
    setSkill([...selected]);
    setShow(false);
  };
  const cancelClick = () => {
    setShow(false);
    setSelected([...skill]);
  };
  const addSkill = () => {
    // setSkill([...skill, skillInput]);
    // setSkillInput("");
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const dualChange = (sel) => {
    console.log(sel);
    setSelected(sel);
  };
  return (
    <Form>
      <Row>
        <div style={{ color: " #414141", fontSize: "22px" }}>
          Basic Information
        </div>
        <hr style={{ marginLeft: "12px", width: "97%" }} />
        <Col>
          <Form.Group>
            <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
              Name*
            </Form.Label>
            <Form.Control
              type="text"
              value={personInfo.name}
              name="name"
              placeholder="Enter your name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Surname*
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            value={personInfo.surname}
            name="surname"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: "18px" }}>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Employee ID
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your employee id"
            value={personInfo.eId}
            name="eId"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Manager
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your manager details"
            value={personInfo.manager}
            name="manager"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: "18px" }}>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Title
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your employee id"
            value={personInfo.title}
            name="title"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Department
          </Form.Label>
          <Form.Control
            placeholder="Enter your manager details"
            value={personInfo.department}
            name="department"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: "18px" }}>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            My Profile*
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your comments..."
            value={personInfo.profile}
            name="profile"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: "18px" }}>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Why I Volunteer?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your comments..."
            value={personInfo.volunteer}
            name="volunteer"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: "18px" }}>
        <div style={{ color: " #414141", fontSize: "22px" }}>
          Address Information
        </div>
        <hr style={{ marginLeft: "12px", width: "97%" }} />
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            City
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            name="city"
            value={personInfo.city}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Country
          </Form.Label>
          {/* <Form.Select
            disabled
            style={{ backgroundColor: "white", color: "#8b8989" }}
          >
            <option> select your country</option>
            <option value="DICTUM">Dictamen</option>
            <option value="CONSTANCY">Constancia</option>
            <option value="COMPLEMENT">Complemento</option>
          </Form.Select> */}
          <Form.Control as="select">
            <option value="DICTUM">India</option>
            <option value="CONSTANCY">Uk</option>
            <option value="COMPLEMENT">Us</option>
            value={personInfo.type}
            onChange={handleChange}
            name="type"
          </Form.Control>
        </Col>
      </Row>
      <Row style={{ paddingTop: "18px" }}>
        <hr style={{ marginLeft: "12px", width: "97%" }} />
        <div style={{ color: " #414141", fontSize: "22px" }}>
          Professional Information
        </div>

        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            Availibility
          </Form.Label>
          {/* <Form.Select
            disabled
            style={{ backgroundColor: "white", color: "#8b8989" }}
          >
            <option>select your availibility</option>
          </Form.Select> */}
          <Form.Control as="select">
            <option value="DICTUM">a</option>
            <option value="CONSTANCY">b</option>
            <option value="COMPLEMENT">c</option>
            value={personInfo.availibility}
            onChange={handleChange}
            name="availibility"
          </Form.Control>
        </Col>
        <Col>
          <Form.Label style={{ color: "#414141", fontSize: "15px" }}>
            LinkedIn
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter linkedIn URL"
            name="url"
            value={personInfo.url}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row style={{ paddingTop: "18px" }}>
        <div style={{ color: " #414141", fontSize: "22px" }}>My Skills</div>
        <hr style={{ marginLeft: "12px", width: "97%" }} />
        <Col>
          {/* <DualListBox
            options={options}
            selected={selected}
            onChange={dualChange}
          /> */}
          <ListGroup
            variant="light"
            style={{ border: "1px solid #d9d9d9", padding: "8px 16px" }}
          >
            {skill.map((item) => {
              return (
                <ListGroup.Item
                  style={{
                    padding: "0px",
                    color: "#414141",
                    borderColor: "white",
                  }}
                >
                  {item}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          {/* <Form.Control
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          /> */}
          <Button
            className="btn btn-primary btn-sm"
            style={{
              backgroundColor: "white",
              color: "#757575",
              border: "1px solid #757575",
              borderRadius: "22px",
              display: "flex",
              float: "left",
              width: "10%",
              fontSize: "12px",
              marginTop: "13px",
            }}
            onClick={addSkill}
          >
            Add Skills
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
              <Modal.Title>Add your Skills</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DualListBox
                options={options}
                selected={selected}
                onChange={dualChange}
              />
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary">Cancel</Button> */}
              <Button
                className="btn btn-primary btn-sm"
                style={{
                  backgroundColor: "white",
                  color: "#757575",
                  border: "2px solid #757575",
                  borderRadius: "22px",
                  float: "right",
                  marginRight: "0px",
                  overflow: "auto",
                }}
                onClick={cancelClick}
              >
                Cancel
              </Button>
              <Button
                className="btn btn-primary btn-sm"
                style={{
                  backgroundColor: "white",
                  color: "orange",
                  border: "2px solid orange",
                  borderRadius: "22px",
                  float: "right",
                  marginRight: "0px",
                  overflow: "auto",
                }}
                onClick={btnClickAddSkill}
              >
                save
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Button
        className="btn btn-primary btn-sm"
        style={{
          backgroundColor: "white",
          color: "#f88634",
          border: "2px solid #f88634",
          borderRadius: "22px",
          display: "flex",
          float: "right",
          width: "10%",
        }}
        onClick={handleClick}
      >
        save
      </Button>
    </Form>
  );
};

export default UserProfile;
