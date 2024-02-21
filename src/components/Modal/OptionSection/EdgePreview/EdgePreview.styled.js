import styled from "styled-components";

export const ChoiceWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
`;
export const FieldChoiceTop = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 2;
  border: 1px solid #c2c2c2;

  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;

export const SideLine = styled.div`
  position: absolute;
  width: 45px;
  height: 4px;
  background-color: #204b37;
  display: block;
  border-radius: 20px;
  margin-left: ${(props) =>
    props.$top === true
      ? "18px"
      : props.$left === true
      ? "-10px"
      : props.$right === true
      ? "46px"
      : props.$bottom === true
      ? "18px"
      : "0"};
  box-sizing: border-box;
  transform: ${(props) =>
    props.$left === true || props.$right === true ? "rotate(90deg)" : "none"};
  margin-top: ${(props) =>
    props.$top === true
      ? "10px"
      : props.$left === true
      ? "37px"
      : props.$right === true
      ? "37px"
      : props.$bottom === true
      ? "65px"
      : "0"};
  @media (max-width: 425px) {
    width: 35px;
    height: 3px;
    margin-top: ${(props) =>
      props.$top === true
        ? "5px"
        : props.$left === true
        ? "28px"
        : props.$right === true
        ? "28px"
        : props.$bottom === true
        ? "52px"
        : "0"};
    margin-left: ${(props) =>
      props.$top === true
        ? "13px"
        : props.$left === true
        ? "-10px"
        : props.$right === true
        ? "35px"
        : props.$bottom === true
        ? "13px"
        : "0"};
  }
`;

export const FieldChoiceLeft = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 1;
  border: 1px solid #c2c2c2;
 
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceBottom = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 2;
  grid-row-start: 3;
  border: 1px solid #c2c2c2;

  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceRight = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 3;
  grid-row-start: 2;
  border: 1px solid #c2c2c2;
  
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const SpanLabel = styled.span`
  display: flex;
  justify-content: center;
  margin-top: -27%;
  font-size: 13px;
  font-weight: 700;
  color: #001a34;
`;

export const StyledInputCheckbox = styled.input`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  &:checked {
    background-color: rgb(2, 144, 74, 0.3);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'%3E%3Cpath fill='%2343A047' d='M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
  }
  &:hover {
    background-color: rgb(2, 144, 74, 0.3);
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
