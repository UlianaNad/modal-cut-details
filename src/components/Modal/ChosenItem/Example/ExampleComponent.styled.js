import styled from "styled-components";

export const Example = styled.div`
  width: 490px;
  height: 490px;
  background-color: rgb(0, 161, 82, 0.1);
  position: relative;

  @media (max-width: 1150px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 426px) {
    width: 260px;
    height: 260px;
  }

  /* Horizontal line */
  &::before {
    content: "${(props) =>
      props.$width !== null && props.$width !== 0
        ? props.$width + "mm"
        : "350mm"}";
    position: absolute;
    display: flex;
    justify-content: center;
    top: 15px;
    left: 50%;
    color: rgb(0, 161, 82);
    font-size: 12px;
    font-weight: 600;
    transform: translateX(-50%);
    /* z-index: 1; */

    @media (min-width: 426px) {
      top: 20px;
      font-size: 15px;
    }
  }

  /* Vertical line */
  &::after {
    content: "${(props) =>
      props.$height !== null && props.$height !== 0
        ? props.$height + "mm"
        : "350mm"}";
    position: absolute;
    display: flex;
    justify-content: center;
    color: rgb(0, 161, 82);
    font-weight: 600;
    font-size: 12px;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    /* z-index: 1; */
    writing-mode: vertical-lr;
    text-orientation: mixed;
    @media (min-width: 426px) {
      left: 20px;
      font-size: 15px;
    }
  }
`;

export const ExampleItem = styled.div`
  width: ${(props) =>
    props.$width !== null && props.$width !== 0
      ? props.$width * props.$scale + "px"
      : "250px"};
  height: ${(props) =>
    props.$height !== null && props.$height !== 0
      ? props.$height * props.$scale + "px"
      : "250px"};
  background-color: ${(props) => (props.$edgeside ? "transparent" : "white")};
  border-top: ${(props) =>
    props.$edgeside === "top-choice"
      ? "10px solid rgb(0,161,82)"
      : "1px solid rgb(0,161,82, 0.5)"};
  border-bottom: ${(props) =>
    props.$edgeside === "choice-bottom"
      ? "10px solid rgb(0,161,82)"
      : "1px solid rgb(0,161,82, 0.5)"};
  border-left: ${(props) =>
    props.$edgeside === "left-choice"
      ? "10px solid rgb(0,161,82)"
      : "1px solid rgb(0,161,82, 0.5)"};
  border-right: ${(props) =>
    props.$edgeside === "choice-right"
      ? "10px solid rgb(0,161,82)"
      : "1px solid rgb(0,161,82, 0.5)"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    scale(${(props) => props.$scale || 1});

  @media (min-width: 426px) {
    width: ${(props) =>
      props.$width !== null && props.$width !== 0
        ? props.$width * props.$scale + "px"
        : "350px"};
    height: ${(props) =>
      props.$height !== null && props.$height !== 0
        ? props.$height * props.$scale + "px"
        : "350px"};
  }
`;
export const LeftArrow = styled.div`
  height: 50px;
  position: relative;
  display: inline-flex;
  border-top: 2px solid grey;
  margin: ${(props) =>
    props.$rotate ? "-14px 0px 86px -215px" : "16px 0px 0px 28px"};
  width: 85%;
  transform: ${(props) => (props.$rotate ? "rotate(90deg)" : "rotate(0deg)")};

  @media (max-width: 1150px) {
    margin: ${(props) =>
      props.$rotate ? "-10px 0px 146px -161px" : "16px 0px 0px 28px"};
  }
  @media (max-width: 426px) {
    margin: ${(props) =>
      props.$rotate ? "-9px 0px 190px -124px" : "12px 0px 0px 19px"};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(-45deg);
    top: -9px;
    left: 3px;
  }

  &::after {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    top: 0px;
    left: -8px;
  }
`;
export const TopArrow = styled.div`
  height: 50px;
  position: relative;
  display: inline-flex;
  border-top: 2px solid grey;
  margin: ${(props) => (props.$rotate ? " 235px 0px -8px -144px" : "0")};
  transform: ${(props) => (props.$rotate ? "rotate(90deg)" : "rotate(0deg)")};

  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);

    top: ${(props) => (props.$rotate ? "55px" : "-9px")};
    left: ${(props) => (props.$rotate ? "97px" : "-18px")};
    @media (max-width: 1150px) {
      top: ${(props) => (props.$rotate ? "0px" : "-9px")};
      left: ${(props) => (props.$rotate ? "-18px" : "-18px")};
    }
    @media (max-width: 426px) {
      top: ${(props) => (props.$rotate ? "-43px" : "-9px")};
      left: ${(props) => (props.$rotate ? "-105px" : "-18px")};
    }
  }

  &::after {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(-45deg);
    top: ${(props) => (props.$rotate ? "66px" : "0px")};
    left: ${(props) => (props.$rotate ? "108px" : "-7px")};
    @media (max-width: 1150px) {
      top: ${(props) => (props.$rotate ? "10px" : "0px")};
      left: ${(props) => (props.$rotate ? "-8px" : "-7px")};
    }
    @media (max-width: 426px) {
      top: ${(props) => (props.$rotate ? "-33px" : "0px")};
      left: ${(props) => (props.$rotate ? "-94px" : "-7px")};
    }
  }
`;
