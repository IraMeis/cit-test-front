import React from "react";
import ModalInfo from "./ModalInfo";

const ModalError = ({handleCloseErr, errorMess, show}) => {
  return (
      <ModalInfo handleClose={handleCloseErr} show={show} message={errorMess} head ={"Something went wrong..."}/>
  );
}

export default ModalError;
