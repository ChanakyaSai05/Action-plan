import React, { useState } from "react";
import "../pages/ActionPlans.css";

import eye from "./eye.png";
import CreatePointerModal from "./CreatePointerModal";
import ActionPlanSubMap from "./ActionPlanSubMap";
function ActionPlanSubBar({ actionSubBarDetails }) {
  const [subBarDetails, setSubBarDetails] = useState([...actionSubBarDetails]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  //   console.log(subBarDetails);
  //Adding New Plan
  const newPointerBtn = () => {
    handleOpen();
  };

  return (
    <>
      {subBarDetails.map((item, index) => (
        <ActionPlanSubMap
          item={item}
          index={index}
          setSubBarDetails={setSubBarDetails}
          subBarDetails={subBarDetails}
        />
      ))}
      <div className="subbar-button">
        <button className="subbar-button-pointer" onClick={newPointerBtn}>
          <span style={{ color: "#2563eb", fontWeight: "bold" }}>
            {" "}
            + Add Pointer
          </span>
        </button>
        <button
          className="subbar-button-hover"
          style={{ color: "#2563eb", fontWeight: "bold" }}
        >
          + On Hover**
        </button>
      </div>
      <div>
        <CreatePointerModal
          open={open}
          setOpen={setOpen}
          subBarDetails={subBarDetails}
          setSubBarDetails={setSubBarDetails}
        />
      </div>
    </>
  );
}

export default ActionPlanSubBar;
