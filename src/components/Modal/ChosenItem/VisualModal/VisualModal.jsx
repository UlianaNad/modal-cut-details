import React, { useEffect, useMemo } from "react";
import { StyledModalMini, StyledOverlayMini } from "./VisualModal.styled";
import Example from "../Example/Example";
import { ExampleItem, LeftArrow, TopArrow } from "../Example/Example.styled";

const VisualModal = ({ memorized }) => {
  // const { width, height, scale, edgeSide } = memorized;
  const { width, height, scale, edgeSide } = useMemo(
    () => memorized,
    [memorized]
  );
  // rest of the component
  useEffect(() => {
    console.log("VisualModal props:", memorized);
  }, [memorized]);

  return (
    <StyledOverlayMini>
      <StyledModalMini>
        {/* <Example $width={width} $height={height}>
          <LeftArrow></LeftArrow>
          <TopArrow></TopArrow>
          <LeftArrow $rotate={true}></LeftArrow>
          <TopArrow $rotate={true}></TopArrow>
          <ExampleItem $width={width} $height={height} $scale={scale} />
          {edgeSide?.map((edge, i) => {
            return (
              <ExampleItem
                $key={i}
                $width={width}
                $height={height}
                $scale={scale}
                $edgeside={edge}
              ></ExampleItem>
            );
          })}
        </Example> */}
      </StyledModalMini>
    </StyledOverlayMini>
  );
};

export default VisualModal;
