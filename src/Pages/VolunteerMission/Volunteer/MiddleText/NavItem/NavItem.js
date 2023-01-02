import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./NavItem.css";
import Button from "react-bootstrap/Button";
import { VscFilePdf } from "react-icons/vsc";
import { HiOutlineDocumentText } from "react-icons/hi";
const NavItem = () => {
  return (
    <>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Mission" active>
          <div style={{ fontSize: "25px", color: "#414141" }}>Introduction</div>
          <div style={{ fontSize: "15px", fontWeight: "300" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div style={{ fontSize: "15px", fontWeight: "300" }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <div style={{ fontSize: "15px", fontWeight: "300" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={{ fontSize: "25px", color: "#414141" }}>Challenge</div>
          <div style={{ fontSize: "15px", fontWeight: "300" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={{ fontSize: "15px", fontWeight: "300" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
          <div style={{ fontSize: "25px", color: "#414141" }}>Documents</div>
          <div style={{ display: "flex" }}>
            <Button
              className="btn btn-primary btn-sm "
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "1px solid grey",
                borderRadius: "22px",
                fontSize: "14px",
              }}
            >
              <VscFilePdf /> lorem-ipsum.pdf
            </Button>
            <Button
              className="btn btn-primary btn-sm "
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "1px solid grey",
                borderRadius: "22px",
                fontSize: "14px",
              }}
            >
              <HiOutlineDocumentText /> at_vero_eos_accusamus.doc
            </Button>
            <Button
              className="btn btn-primary btn-sm "
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "1px solid grey",
                borderRadius: "22px",
                fontSize: "14px",
              }}
            >
              <HiOutlineDocumentText /> important_doc.xls
            </Button>
          </div>
        </Tab>
        <Tab eventKey="second" title="Organization"></Tab>
        <Tab eventKey="third" title="Sponsored"></Tab>
        <Tab eventKey="forth" title="Comments"></Tab>
      </Tabs>
    </>
  );
};

export default NavItem;
