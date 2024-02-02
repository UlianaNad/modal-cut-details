import React, { useMemo } from "react";
import { StyledModalMini, StyledOverlayMini } from "./VisualModal.styled";
import ExampleComponent from "../Example/ExampleComponent";

const VisualModal = ({ memorized }) => {
  // const { width, height, scale, edgeSide } = memorized;
  const { width, height, scale, edgeSide } = useMemo(
    () => memorized,
    [memorized]
  );

  return (
    <StyledOverlayMini>
      <StyledModalMini>
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
