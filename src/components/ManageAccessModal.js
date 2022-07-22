import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Lists from "./Lists";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import ListItemButton from "@mui/material/ListItemButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#f8fafc",
  boxShadow: 24,
  p: 4,
};
const inputStyle = {
  display: "flex",
  Width: "20vw",
  border: "1px solid #bdbfbb",
  padding: "2px 14px ",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "4px",
};

export default function ManageAccessModal({
  openManageAccess,
  setOpenManageAccess,
}) {
  const [display, setDisplay] = React.useState(false);
  const handleClose = () => setOpenManageAccess(false);
  const [data, setData] = React.useState([
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Aryan",
      add: false,
    },
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Karan",
      add: false,
    },
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Kishan",
      add: false,
    },
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Nishi",
      add: false,
    },
  ]);
  const [teamData, setTeamData] = React.useState([]);
  const plusButton = () => {
    setDisplay(!display);
  };
  //add To Team
  const addToTeam = (index) => {
    let filtered = teamData.filter((item) => item.name === index.name);
    if (filtered.length > 0) {
      return;
    }
    setTeamData([...teamData, index]);
    setData((cate) =>
      cate.map((item) => {
        if (item.name === index.name) {
          let temp;
          if (item.add === false) {
            temp = true;
          } else {
            temp = false;
          }
          return { ...item, add: temp };
        } else {
          return item;
        }
      })
    );
  };
  //Remove From Team
  const removeFromTeam = (index) => {
    // setTeamData([...teamData, index]);
    console.log(index);
    const dataCopy = [...teamData];
    let filtered = dataCopy.filter((item) => item.name !== index.name);
    setTeamData(filtered);
    setData((cate) =>
      cate.map((item) => {
        if (item.name === index.name) {
          let temp;
          if (item.add === false) {
            temp = true;
          } else {
            temp = false;
          }
          return { ...item, add: temp };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <Modal
        open={openManageAccess}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              position: "absolute",
              marginLeft: "11vw",
              marginTop: "8vw",
            }}
          ></div>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>SOP Access</h2>
          </Typography>
          <div>
            <div
              style={{
                color: "#2563eb",
                fontSize: "18px",
                fontWeight: "bold",
                paddingBottom: "3px",
                marginTop: "20px ",
              }}
            >
              Sales
            </div>

            <div style={inputStyle}>
              <div className="modal-input-block-left">
                <div style={{ fontSize: "12px" }}>TEAMMATES</div>
                <div>Select Members</div>
              </div>
              <div>
                <span>
                  <IconButton edge="end" aria-label="comments">
                    <AddBoxIcon />
                  </IconButton>
                </span>
              </div>
            </div>
          </div>
          {display && (
            <div style={{ position: "absolute", marginLeft: "80%" }}>
              <Card
                variant="outlined"
                style={{ width: " 180%", marginLeft: "30%", marginTop: "2%" }}
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
                    <ListItem
                      disablePadding
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          {/* <AddBoxIcon /> */}
                          {item.add ? (
                            <span onClick={() => removeFromTeam(item)}>
                              <IconButton edge="end" aria-label="comments">
                                <CloseIcon style={{ color: "red" }} />
                              </IconButton>
                            </span>
                          ) : (
                            ""
                          )}
                        </IconButton>
                      }
                    >
                      <ListItemButton
                        // onClick={() => setTeamData([...teamData, item])}
                        onClick={() => addToTeam(item)}
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt=""
                            src={item.img}
                            style={{ width: "2vw", height: "2vw" }}
                          />
                        </ListItemAvatar>
                        <ListItemText id="list" primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Card>
            </div>
          )}
          <div>
            <div
              style={{
                color: "#2563eb",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px ",
                paddingBottom: "3px",
              }}
            >
              Marketing
            </div>
            <div style={inputStyle}>
              <div className="modal-input-block-left">
                <div style={{ fontSize: "12px" }}>TEAMMATES</div>
                {teamData.length === 0 ? (
                  <div>Select Members</div>
                ) : (
                  teamData.map((item) => (
                    <Chip
                      avatar={<Avatar alt="Natacha" src={item.img} />}
                      label={item.name}
                      variant="outlined"
                      onClick={() => {
                        setDisplay(false);
                        setTeamData([...teamData, item]);
                      }}
                      style={{ margin: "5px" }}
                    />
                  ))
                )}
              </div>
              <div>
                {display === false ? (
                  <span onClick={plusButton}>
                    <IconButton edge="end" aria-label="comments">
                      <AddBoxIcon />
                    </IconButton>
                  </span>
                ) : (
                  <span onClick={plusButton}>
                    <IconButton edge="end" aria-label="comments">
                      <IndeterminateCheckBoxIcon />
                    </IconButton>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                color: "#2563eb",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px ",
                paddingBottom: "3px",
              }}
            >
              Design
            </div>
            <div style={inputStyle}>
              <div className="modal-input-block-left">
                <div style={{ fontSize: "12px" }}>TEAMMATES</div>
                <div>Select Members</div>
              </div>
              <div>
                <span>
                  <IconButton edge="end" aria-label="comments">
                    <AddBoxIcon />
                  </IconButton>
                </span>
              </div>
            </div>
          </div>
          <Typography style={{ marginTop: "20px", marginLeft: "10.9vw" }}>
            <button
              className="btn btn-md bg-white px-4 mx-2  "
              style={{ border: "1px solid red" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="btn btn-md bg-primary px-4 "
              style={{ color: "white" }}
            >
              Create
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
