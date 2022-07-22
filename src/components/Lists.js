import React, { useState } from "react";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/IconButton";

function Lists() {
  const [data, setData] = useState([
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Aryan",
    },
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Karan",
    },
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Kishan",
    },
    {
      img: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      name: "Nishi",
    },
  ]);
  return (
    <div>
      <Card
        variant="outlined"
        style={{ width: " 180%", marginLeft: "30%", marginTop: "2%" }}
      >
        <List
          dense
          sx={{ width: "100%", maxWidth: 550, bgcolor: "background.paper" }}
        >
          {data.map((item) => (
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <AddBoxIcon />
                </IconButton>
              }
            >
              <ListItemButton>
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
  );
}

export default Lists;
