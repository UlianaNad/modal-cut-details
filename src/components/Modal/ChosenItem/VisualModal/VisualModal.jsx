import React from "react";
import { StyledModalMini, StyledOverlayMini } from "./VisualModal.styled";
import Example from "../Example/Example";

const VisualModal = (width, height, scale, edgeSide) => {
  <StyledOverlayMini>
    <StyledModalMini>
      <Example
        width={width}
        height={height}
        scale={scale}
        edgeSide={edgeSide}
      />
    </StyledModalMini>
  </StyledOverlayMini>;
};

export default VisualModal;
