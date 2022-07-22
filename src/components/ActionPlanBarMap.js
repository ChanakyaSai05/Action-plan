import {
  Box,
  Card,
  List,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import dots3 from "../pages/dots3.png";
function ActionPlanBarMap({
  item,
  index,
  openSubCategory2,
  category,
  setCategory,
  setActionSubBar,
}) {
  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(false);
  let data = ["Category", "Manage Access", "Delete"];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const menuButtonFun = () => {
    setDisplay(!display);
  };
  const handleDelete = () => {
    let temp = [...category];
    temp.splice(index, 1);
    setDisplay(false);
    setCategory(temp);
    if (index === 1) {
      setActionSubBar(false);
      console.log(index);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 470,
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      {display && (
        <div style={{ position: "absolute", marginLeft: "74%" }}>
          <Card
            variant="outlined"
            style={{
              width: " 130%",
              marginTop: "2%",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <List
              dense
              sx={{
                width: "100%",
                maxWidth: 550,
                bgcolor: "background.paper",
              }}
            >
              {data.map((item) => (
                <>
                  {item === "Delete" ? (
                    <ListItemText
                      id="list"
                      primary={item}
                      onClick={handleOpen}
                      style={{
                        padding: "15px",
                        backgroundColor: "#fef2f2",
                        color: "red",
                      }}
                    />
                  ) : (
                    <ListItemText
                      id="list"
                      primary={item}
                      style={{ paddingLeft: "4px" }}
                    />
                  )}

                  <br />
                </>
              ))}
            </List>
          </Card>
        </div>
      )}
      <div
        className="plus-block2"
        onClick={() => openSubCategory2(item.id)}
        style={{ cursor: "pointer" }}
      >
        {item.state === "closed" ? "+" : "-"}
      </div>
      <div className="action-planBar" style={{ cursor: "pointer" }}>
        <div
          className="action-details-dots "
          onClick={() => openSubCategory2(item.id)}
        >
          <img
            src={dots3}
            width="2%"
            style={{ width: "2.6%", marginRight: "5px" }}
          />
          <div>{item.title}</div>
        </div>

        <div>
          <span style={{ paddingRight: "5px" }} onClick={menuButtonFun}>
            <i class="bi bi-three-dots-vertical "></i>
          </span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h4>Delete Category or/ Sub Category</h4>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this learning,
            <span style={{ textDecoration: "underline" }}>
              this step cannot be undone
            </span>
          </Typography>
          <br />

          <Typography style={{ marginTop: "10px", marginLeft: "12vw" }}>
            <button
              className="btn btn-md bg-white px-4 mx-2 "
              style={{ border: "1px solid red" }}
              onClick={() => {
                setDisplay(false);
                handleClose();
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-md bg-primary px-4 "
              style={{ color: "white" }}
              onClick={() => {
                handleDelete();
                handleClose();
              }}
            >
              Delete
            </button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ActionPlanBarMap;
