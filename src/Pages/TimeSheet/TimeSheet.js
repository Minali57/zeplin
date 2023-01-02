import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataTable from "react-data-table-component";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Button, Modal, Form } from "react-bootstrap";
import { AddApi } from "../../Api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHours } from "../../feature/zeplin/ZeplinSlice";
import { addHours } from "../../feature/zeplin/ZeplinSlice";
import GetData from "../../Api/Api";
const TimeSheet = () => {
  const navigate = useNavigate();
  const { hours } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [showHours, setShowHours] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [dataHours, setDataHours] = useState({
    mission: "1",
    date: "",
    hours: "",
    minutes: "",
    message: "",
  });
  const [dataGoal, setDataGoal] = useState({
    mission: "",
    actions: "",
    date: "",
    message: "",
  });
  const handleChangeGoal = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataGoal({ ...dataGoal, [name]: value });
  };
  const customStyles = {
    headCells: {
      style: {
        fontSize: "12px",
      },
    },
  };
  //   const data = [
  //     {
  //       mission: "m",
  //       date: "05/07/2000",
  //       hours: "8",
  //       minutes: "30",
  //     },
  //   ];
  const columns = [
    {
      name: "Mission",
      selector: (row) => row.mission,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Hours",
      selector: (row) => row.hours,
    },
    {
      name: "Minutes",
      selector: (row) => row.minutes,
    },
    {
      name: "Message",
      selector: (row) => row.message,
    },

    {
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <BiEdit style={{ fontSize: "20px" }} />
          <RiDeleteBin6Line style={{ fontSize: "20px" }} />
        </div>
      ),
    },
  ];

  const data2 = [
    {
      mission: "m",
      date: "05/07/2000",
      action: "0",
    },
  ];
  const columns2 = [
    {
      name: "Mission",
      selector: (row) => row.mission,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
    {
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "2px" }}>
          <BiEdit style={{ fontSize: "20px" }} />
          <RiDeleteBin6Line style={{ fontSize: "20px" }} />
        </div>
      ),
    },
  ];
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataHours({ ...dataHours, [name]: value });
  };
  const handleClose = () => {
    setShowHours(false);
  };
  const handleCloseGoal = () => {
    setShowGoals(false);
  };
  const handleHoursdata = () => {
    var data = JSON.stringify([
      {
        message: dataHours.message,
        mission: dataHours.mission,
        date: dataHours.date,
        minutes: dataHours.minutes,
        hours: dataHours.hours,
      },
    ]);
    // AddApi(data, callbackafterSubmit, "hours");
    dispatch(addHours(data)).then(() => {
      callbackafterSubmit();
    });
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => {
        handleClose();
        dispatch(getHours());
      },
      autoClose: 2000,
    });
  };

  const cancelHoursData = () => {};
  const handleGoalsdata = () => {};
  const cancelGoalsData = () => {};
  const setTimeSheetData = async (data) => {
    setData(data);
  };

  useEffect(() => {
    // async function load() {
    //   await GetData("hours", setTimeSheetData);

    // }
    // load();
    dispatch(getHours());
    console.log();
  }, []);
  return (
    <div style={{ padding: "5% 8%" }}>
      <Modal show={showHours} animation={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Mission</Form.Label>
            <Form.Select
              name="mission"
              title="country"
              value={dataHours.mission}
              onChange={handleChange}
            >
              <option value="1">Faith Community Fellowship</option>
              <option value="2">Active</option>
              <option value="3">InActive</option>
            </Form.Select>
            <Form.Label>Date Volunteered</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Select Date"
              value={dataHours.date}
              onChange={handleChange}
            />
            <Row>
              <Col>
                <Form.Label>Hours</Form.Label>
                <Form.Control
                  type="number"
                  name="hours"
                  placeholder="Enter Spent Hours"
                  value={dataHours.hours}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Minutes</Form.Label>
                <Form.Control
                  type="number"
                  name="minutes"
                  placeholder="Enter Spent Minutes"
                  value={dataHours.minutes}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={dataHours.message}
              style={{ color: "#757575" }}
              name="message"
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary btn-sm"
            style={{
              backgroundColor: "white",
              color: "#757575",
              border: "1.5px solid #757575",
              borderRadius: "22px",
              float: "right",
              marginRight: "0px",
              overflow: "auto",
            }}
            onClick={cancelHoursData}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-primary btn-sm"
            style={{
              backgroundColor: "white",
              color: "orange",
              border: "1.5px solid orange",
              borderRadius: "22px",
              float: "right",
              marginRight: "0px",
              overflow: "auto",
            }}
            onClick={handleHoursdata}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showGoals} animation={false} onHide={handleCloseGoal}>
        <Modal.Header closeButton>
          <Modal.Title>please input below Volunteering Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Mission</Form.Label>
            <Form.Select
              name="mission"
              value={dataGoal.mission}
              title="country"
            >
              <option value="1">Plantaion and afforestion</option>
              <option value="2">Active</option>
              <option value="3">InActive</option>
            </Form.Select>
            <Form.Label>Actions</Form.Label>
            <Form.Control
              type="text"
              name="actions"
              value={dataGoal.actions}
              placeholder="Enter Actions"
              onChange={handleChangeGoal}
            />
            <Form.Label>Date Volunteered</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Select Date"
              value={dataGoal.date}
              onChange={handleChangeGoal}
            />
            <Form.Label>Date Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={dataGoal.message}
              style={{ color: "#757575" }}
              name="message"
              onChange={handleChangeGoal}
            />
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary btn-sm"
            style={{
              backgroundColor: "white",
              color: "#757575",
              border: "1.5px solid #757575",
              borderRadius: "22px",
              float: "right",
              marginRight: "0px",
              overflow: "auto",
            }}
            onClick={cancelGoalsData}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-primary btn-sm"
            style={{
              backgroundColor: "white",
              color: "orange",
              border: "1.5px solid orange",
              borderRadius: "22px",
              float: "right",
              marginRight: "0px",
              overflow: "auto",
            }}
            onClick={handleGoalsdata}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <h2>Volunteering timesheet</h2>
      <Container>
        <Row>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Volunteering Hours
                  <Button
                    style={{
                      borderRadius: "22px",
                      padding: "0 12px",
                      height: "32px",
                      backgroundColor: "white",
                      color: "black",
                      border: "1.5px solid black",
                      float: "right",
                    }}
                    onClick={() => setShowHours(true)}
                  >
                    Add
                  </Button>
                </Card.Title>
                <DataTable
                  columns={columns}
                  // data={data}
                  data={hours}
                  customStyles={customStyles}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Volunteering Goals
                  <Button
                    style={{
                      borderRadius: "22px",
                      padding: "0 12px",
                      height: "32px",
                      backgroundColor: "white",
                      color: "black",
                      border: "1.5px solid black",
                      float: "right",
                    }}
                    onClick={() => setShowGoals(true)}
                  >
                    Add
                  </Button>
                </Card.Title>
                <DataTable
                  columns={columns2}
                  data={data2}
                  customStyles={customStyles}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TimeSheet;
