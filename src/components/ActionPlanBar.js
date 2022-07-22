import React, { useState } from "react";
import "../pages/ActionPlans.css";
import ActionPlanBarMap from "./ActionPlanBarMap";
import ActionPlanSubBar from "./ActionPlanSubBar";
import DeleteModal from "./DeleteModal";

function ActionPlanBar() {
  const [category, setCategory] = useState([
    {
      id: 1,
      title: "Wordpress",
      state: "closed",
      dotMenu: "false",
    },
    {
      id: 2,
      title: "Google Drive",
      state: "closed",
      dotMenu: "false",
    },
  ]);
  const [actionSubBar, setActionSubBar] = useState(false);
  const [actionSubBarDetails, setActionSubBarDetails] = useState([
    "Pointer 1",
    "Pointer 2",
    "Pointer 3",
  ]);
  const [open, setOpen] = React.useState(false);
  //
  const openSubCategory2 = (index) => {
    setCategory((cate) =>
      cate.map((item) => {
        if (item.id === index) {
          let temp;
          if (item.state === "closed") {
            temp = "open";
          } else {
            temp = "closed";
          }
          return { ...item, state: temp };
        } else {
          return item;
        }
      })
    );
    if (index === 2) {
      setActionSubBar(!actionSubBar);
    }
  };

  return (
    <>
      {category.map((item, index) => (
        <>
          <ActionPlanBarMap
            item={item}
            index={index}
            openSubCategory2={openSubCategory2}
            category={category}
            setCategory={setCategory}
            setActionSubBar={setActionSubBar}
          />
        </>
      ))}

      {actionSubBar && (
        <ActionPlanSubBar actionSubBarDetails={actionSubBarDetails} />
      )}
      <div>
        <DeleteModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default ActionPlanBar;
