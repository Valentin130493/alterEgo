import * as React from "react";
import Modal from "@mui/material/Modal";

export const ModalWindow = ({ children, open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </>
  );
};
