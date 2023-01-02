import React, { useState } from "react";
import { BsSearch, BsList, BsGrid } from "react-icons/bs";
import "./Filter.css";
import Table from "react-bootstrap/Table";
import { BsChevronDown } from "react-icons/bs";
const Filter = ({ count, changeView }) => {
  // const [num, setNum] = useState(count);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px",
        }}
      >
        <div>
          <p style={{ fontSize: "15px", marginTop: "10px", color: "#414141" }}>
            Explore &nbsp;
            <span
              style={{ color: "#131313", fontSize: "17px", fontWeight: "499" }}
            >
              {count} missions
            </span>
          </p>
        </div>
        <div
          style={{
            alignItems: "baseline",
            minWidth: "28%",
            justifyContent: "end",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Table
            striped
            bordered
            hover
            style={{ width: "50%", marginBottom: "0" }}
          >
            <thead>
              <tr>
                <td>
                  <div>
                    <span style={{ fontSize: "12px", color: "#888" }}>
                      {" "}
                      Sort by
                    </span>
                    <BsChevronDown
                      style={{
                        width: "11px",
                        position: "relative",
                        left: "50%",
                      }}
                    />
                  </div>
                </td>
              </tr>
            </thead>
          </Table>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginLeft: "11px",
              width: "28%",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#e8e8e8",
                borderRadius: "23px",
                padding: "8px",
              }}
            >
              <BsGrid fontSize={"20px"} onClick={() => changeView(0)} />
            </div>

            <BsList
              fontSize={"24px"}
              onClick={() => changeView(1)}
              style={{ color: "#888" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
