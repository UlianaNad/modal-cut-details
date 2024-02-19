import React from "react";
import { StyledModalMini, StyledOverlayMini } from "./VisualModal.styled";
import ExampleComponent from "../Example/ExampleComponent";
import PropTypes from "prop-types";

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

VisualModal.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scale: PropTypes.number,
  edgeSide: PropTypes.array,
  close: PropTypes.func,
};

export default VisualModal;
