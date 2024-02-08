import React, { useMemo } from "react";
import { StyledModalMini, StyledOverlayMini } from "./VisualModal.styled";
import ExampleComponent from "../Example/ExampleComponent";

const VisualModal = ({ memorized, close }) => {

  const { width, height, scale, edgeSide } = useMemo(
    () => memorized,
    [memorized]
  );

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
