import React, { useState } from "react";
import MonitoringItem from "../complix/MonitoringItem";
import SlideShow from "./SlideShow";
import Modal from "./Modal";

function ModalButton({ id, src, temperature, wet, location, date }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div style={{ cursor: "pointer" }}>
      <Modal
        isOpen={isOpen}
        buttonChild={
          <MonitoringItem src={src} temperature={temperature} wet={wet} location={location} date={date} />
        }
      >
        <SlideShow initImg={`${id}`} />
      </Modal>
    </div>
  );
}

export default ModalButton;
