import React, { useState } from "react";

import './modal.scss';

const Modal = (props) => {

  const {isActive, setIsActive} = props;

  return (
    <div className={isActive ? "modal active" : "modal"} onClick={(() => setIsActive(false))}>
      <div className="modal-content" onClick={(e => e.stopPropagation())}>

      </div>

    </div>
  )
}

export default Modal;