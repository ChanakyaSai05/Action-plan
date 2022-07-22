import React, { useState } from "react";
import ActionPlanBar from "../components/ActionPlanBar";
import "./ActionPlans.css";
import Button from "@mui/material/Button";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import NewPlanModal from "../components/NewPlanModal";
import ManageAccessModal from "../components/ManageAccessModal";
import dots3 from "./dots3.png";
import downArrow from "./downArrow.png";
import rightArrow from "./rightArrow.png";
function ActionPlans() {
  const [arrow, setArrow] = useState("1433");
  const [arrow2, setArrow2] = useState("1433");
  const [arrow3, setArrow3] = useState("1433");
  const [subBar, setSubBar] = useState(false);
  const [newPlans, setNewPlans] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openManageAccess, setOpenManageAccess] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const menuOpen = () => {
    if (arrow === "1433") {
      setArrow("02C5");
    } else {
      setArrow("1433");
    }
    setSubBar(!subBar);
  };
  const menuOpenTwo = () => {
    if (arrow2 === "1433") {
      setArrow2("02C5");
    } else {
      setArrow2("1433");
    }
  };
  const menuOpenThree = () => {
    if (arrow3 === "1433") {
      setArrow3("02C5");
    } else {
      setArrow3("1433");
    }
  };
  //Adding New Plan
  const newplanBtn = () => {
    handleOpen();
  };
  const menuOpenAdded = (index) => {
    setNewPlans((cate) =>
      cate.map((item) => {
        if (item.title === index) {
          let temp;
          if (item.code === "1433") {
            temp = "02C5";
          } else {
            temp = "1433";
          }
          return { ...item, code: temp };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="action-container">
      <div className="action">
        <div style={{ paddingLeft: "5px" }}>SOP</div>
        <div className="action-title">
          <h1 style={{ paddingLeft: "5px" }}>Action Plans</h1>

          <div>
            <div>
              <Button
                variant="outlined"
                style={{
                  color: "#304ffe",
                  padding: "5.5px 14px",
                  marginTop: "2px",
                }}
                startIcon={<SupervisorAccountOutlinedIcon />}
                onClick={() => setOpenManageAccess(true)}
              >
                Manage Access
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                style={{ color: "white", backgroundColor: "#304ffe" }}
                color="primary"
                startIcon={<AddBoxTwoToneIcon />}
                onClick={newplanBtn}
              >
                New Plan
              </Button>
            </div>
            <NewPlanModal
              open={open}
              setOpen={setOpen}
              newPlans={newPlans}
              setNewPlans={setNewPlans}
            />
            <ManageAccessModal
              openManageAccess={openManageAccess}
              setOpenManageAccess={setOpenManageAccess}
            />
          </div>
        </div>
        <div className="action-details">
          <div
            className="action-details-blocks"
            onClick={menuOpen}
            style={{ cursor: "pointer" }}
          >
            <div className="action-details-dots">
              <img
                src={dots3}
                width="2%"
                style={{ width: "2.6%", marginRight: "5px" }}
              />
              <div style={{ fontWeight: "bold" }}>Marketing</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ paddingRight: "5px" }}>
                <i class="bi bi-three-dots-vertical "></i>
              </span>
              <span onClick={menuOpen} style={{ marginLeft: "10px" }}>
                {/* {String.fromCodePoint(parseInt(arrow, 16))} */}
                {arrow === "1433" ? (
                  <span>
                    <img src={rightArrow} width="28px" height="28px" />
                  </span>
                ) : (
                  <span>
                    <img src={downArrow} width="28px" height="28px" />
                  </span>
                )}
              </span>
            </div>
          </div>
          {subBar && <ActionPlanBar />}
          <div
            className="action-details-blocks"
            onClick={menuOpenTwo}
            style={{ cursor: "pointer" }}
          >
            <div className="action-details-dots">
              <img
                src={dots3}
                width="2%"
                style={{ width: "2.6%", marginRight: "5px" }}
              />
              <div style={{ fontWeight: "bold" }}>Design</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ paddingRight: "5px" }}>
                <i class="bi bi-three-dots-vertical "></i>
              </span>
              <span onClick={menuOpenTwo} style={{ marginLeft: "10px" }}>
                {/* {String.fromCodePoint(parseInt(arrow, 16))} */}
                {arrow2 === "1433" ? (
                  <span>
                    <img src={rightArrow} width="28px" height="28px" />
                  </span>
                ) : (
                  <span>
                    <img src={downArrow} width="28px" height="28px" />
                  </span>
                )}
              </span>
            </div>
          </div>
          <div
            className="action-details-blocks"
            onClick={menuOpenThree}
            style={{ cursor: "pointer" }}
          >
            <div className="action-details-dots">
              <img
                src={dots3}
                width="2%"
                style={{ width: "2.6%", marginRight: "5px" }}
              />
              <div style={{ fontWeight: "bold" }}>Sales</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ paddingRight: "5px" }}>
                <i class="bi bi-three-dots-vertical "></i>
              </span>
              <span onClick={menuOpenThree} style={{ marginLeft: "10px" }}>
                {/* {String.fromCodePoint(parseInt(arrow, 16))} */}
                {arrow3 === "1433" ? (
                  <span>
                    <img src={rightArrow} width="28px" height="28px" />
                  </span>
                ) : (
                  <span>
                    <img src={downArrow} width="28px" height="28px" />
                  </span>
                )}
              </span>
            </div>
          </div>
          {newPlans.map((item) => (
            <div
              className="action-details-blocks"
              onClick={() => menuOpenAdded(item.title)}
              style={{ cursor: "pointer" }}
            >
              <div className="action-details-dots">
                <img
                  src={dots3}
                  width="2%"
                  style={{ width: "2.6%", marginRight: "5px" }}
                />
                <div style={{ fontWeight: "bold" }}>{item.title}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ paddingRight: "14.3px" }}>
                  <i class="bi bi-three-dots-vertical "></i>
                </span>

                {item.code === "1433" ? (
                  <span
                    className="action-details-arrow"
                    onClick={() => menuOpenAdded(item.title)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={rightArrow} width="28px" height="28px" />
                  </span>
                ) : (
                  <span
                    className="action-details-arrow"
                    onClick={() => menuOpenAdded(item.title)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={downArrow} width="28px" height="28px" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActionPlans;
