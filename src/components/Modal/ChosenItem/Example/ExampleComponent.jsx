import React from "react";
import {
  Example,
  ExampleItem,
  LeftArrow,
  TopArrow,
  WidthText,
  HeightText,
} from "./ExampleComponent.styled";
import PropTypes from "prop-types";

const ExampleComponent = ({ width, height, scale, edgeSide }) => {
  return (
    <Example $width={width} $height={height} key={scale}>
      <WidthText $width={width}>{width ? width : 350}мм</WidthText>
      <HeightText $height={height}>{height ? height : 350}мм</HeightText>
      <LeftArrow></LeftArrow>
      <TopArrow></TopArrow>
      <LeftArrow $rotate={true}></LeftArrow>
      <TopArrow $rotate={true}></TopArrow>
      <ExampleItem $width={width} $height={height} $scale={scale} />
      {Array.isArray(edgeSide) &&
        edgeSide.map((edge, i) => (
          <ExampleItem
            key={i}
            $width={width}
            $height={height}
            $scale={scale}
            $edgeside={edge}
          ></ExampleItem>
        ))}
    </Example>
  );
};

ExampleComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scale: PropTypes.number,
  edgeSide: PropTypes.array,
  close: PropTypes.func,
};
export default ExampleComponent;
