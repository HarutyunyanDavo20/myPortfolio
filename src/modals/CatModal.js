import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "100 px",
  minHeight: "100 px",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

const CatModal = ({ handleCloseModall, url, width, height }) => {

  return (
    <Modal
      open
      onClose={handleCloseModall}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      
      <Box sx={style}>
        <div id="imageCat">
          
          <div
            style={{
              backgroundImage: `url(${url})`,
              backgroundRepeat: "no-repeat",
              width,
              height,
              maxWidth: '80vw',
              maxHeight: '80vh'
            }}
          ></div>
        </div>
      </Box>
    </Modal>
  );
};

export default CatModal;
