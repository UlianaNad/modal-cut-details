import React, { useEffect } from "react";
import { ExampleItem, LeftArrow, TopArrow } from "./Example.styled";

const Example = ({ width, height, scale, edgeSide }) => {
  useEffect(() => {
    console.log(width, height, scale, edgeSide);
  }, []);
  return (
    <div>
      <Example $width={width} $height={height}>
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
      </Example>
    </div>
  );
};

export default Example;
