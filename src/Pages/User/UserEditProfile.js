import React, { useState } from "react";
import UserProfile from "./UserProfile";
import { Row, Col } from "react-bootstrap";
import { Modal, Button, Form } from "react-bootstrap";
import PasswordChecklist from "react-password-checklist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserProfile.css";

const UserEditProfile = () => {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [oldpass, setOldpass] = useState("");
  const [newpass, setnewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "Smith Doh",
    email: "Smithdoh1234@gmail.com",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = contactInfo;

  const contactHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInfo({ ...contactInfo, [name]: value });
  };
  const ContactHandleShow = () => {
    setShowContact(true);
  };
  const ContactHandleClose = () => {
    setShowContact(false);
  };
  const contactCancel = () => {
    setContactInfo({
      name: "Smith Doh",
      email: "Smithdoh1234@gmail.com",
      subject: "",
      message: "",
    });
    setShowContact(false);
  };
  const contactSave = () => {
    toast("Thank you for contacting");
    // setShowContact(false);
    console.log("clicked");
  };
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);
  const cancelData = () => {
    setConfirmpass("");
    setnewpass("");
    setOldpass("");
    setShow(false);
  };
  const channgePass = () => {
    if (oldpass === "minu123") {
      setConfirmpass("");
      setnewpass("");
      setOldpass("");
      alert("password is successfully change");
      setShow(false);
    } else {
      alert("oldpass not match");
      // <Form.Label style={{ color: "red" }}>oldpass not match</Form.Label>;
    }
  };
  return (
    <div>
      <Row style={{ padding: "2% 12%" }}>
        <Col xs={3}>
          <div
            style={{
              paddingBottom: "70%",
              paddingTop: "18px",
              border: "1.5px solid #e8e8e8",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={"/assets/userimg.png"}
                alt="profileIMage"
                style={{ borderRadius: "90%", width: "135px", height: "135px" }}
              />
              Evan Donohue
            </div>
            <ToastContainer position="top-center" />
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Control
                    type="password"
                    value={oldpass}
                    onChange={(e) => setOldpass(e.target.value)}
                    name="oldpass"
                    placeholder="Enter old password"
                    aria-describedby="basic-addon1"
                  />
                  <br />
                  <Form.Control
                    type="password"
                    value={newpass}
                    onChange={(e) => setnewpass(e.target.value)}
                    name="newpass"
                    placeholder="Enter new password"
                    aria-describedby="basic-addon1"
                  />
                  <br />
                  <Form.Control
                    type="password"
                    value={confirmpass}
                    onChange={(e) => setConfirmpass(e.target.value)}
                    name="confirmpass"
                    placeholder="Enter confirm password"
                    aria-describedby="basic-addon1"
                  />
                  <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "match"]}
                    minLength={5}
                    value={newpass}
                    valueAgain={confirmpass}
                  />
                  <br />
                </Form>
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
                  onClick={cancelData}
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
                  onClick={channgePass}
                >
                  Change Password
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div>
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
              onClick={handleShow}
            >
              Change password
            </Button>
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
              onClick={ContactHandleShow}
            >
              Contact Us
            </Button>

            <Modal
              show={showContact}
              onHide={ContactHandleClose}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={contactHandleChange}
                    name="name"
                    style={{ color: "#757575" }}
                    placeholder="Enter your name"
                    aria-describedby="basic-addon1"
                  />
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={contactHandleChange}
                    name="email"
                    placeholder="Enter your email"
                    aria-describedby="basic-addon1"
                    style={{ color: "#757575" }}
                  />
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    value={subject}
                    onChange={contactHandleChange}
                    name="subject"
                    style={{ color: "#757575" }}
                    placeholder="Enter your subject"
                    aria-describedby="basic-addon1"
                  />
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your Message"
                    value={message}
                    style={{ color: "#757575" }}
                    name="message"
                    onChange={contactHandleChange}
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
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
                  onClick={contactCancel}
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
                  onClick={contactSave}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
        <Col>
          <UserProfile />
        </Col>
      </Row>
    </div>
  );
};

export default UserEditProfile;
