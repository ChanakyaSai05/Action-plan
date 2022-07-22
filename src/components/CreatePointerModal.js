import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#f8fafc",
  boxShadow: 24,
  p: 4,
};

export default function NewPlanModal({
  open,
  setOpen,
  subBarDetails,
  setSubBarDetails,
}) {
  const [name, setName] = React.useState("");
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>Add Pointer</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <br />
          <TextField
            id="outlined-name"
            label="Name"
            style={{ width: "26.5vw" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Typography style={{ marginTop: "10px", marginLeft: "11vw" }}>
            <button
              className="btn btn-lg bg-white px-4 mx-2 "
              style={{ border: "1px solid red" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="btn btn-lg bg-primary px-4 "
              style={{ color: "white" }}
              onClick={() => {
                setSubBarDetails([...subBarDetails, name]);
                handleClose();
                setName("");
              }}
            >
              Create
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
