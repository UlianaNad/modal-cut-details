import React from "react";
import { StyledModalMini, StyledOverlayMini } from "./VisualModal.styled";
import ExampleComponent from "../Example/ExampleComponent";

const VisualModal = ({ width, height, scale, edgeSide, close }) => {
  const handleCloseModal = () => {
    close();
  };

  return (
    <StyledOverlayMini>
      <StyledModalMini onClick={handleCloseModal}>
        <ExampleComponent
          width={width}
          height={height}
          scale={scale}
          edgeSide={edgeSide}
        />
      </StyledModalMini>
    </StyledOverlayMini>
  );
};

export default VisualModal;
