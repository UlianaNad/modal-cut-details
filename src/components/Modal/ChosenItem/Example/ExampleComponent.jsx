import React from "react";
import {
  Example,
  ExampleItem,
  LeftArrow,
  TopArrow,
} from "./ExampleComponent.styled";

const ExampleComponent = ({ width, height, scale, edgeSide }) => {
  return (
    <Example $width={width} $height={height} key={scale}>
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

export default ExampleComponent;
