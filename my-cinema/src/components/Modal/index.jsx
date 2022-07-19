import React, { useState } from "react";

import './modal.scss';

const Modal = () => {

  const [active, setActive] = useState(true);

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e => e.stopPropagation())}>

      </div>

    </div>
  )
}

export default Modal;