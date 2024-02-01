import styled from "styled-components";

export const WrapOptions = styled.section`
  position: relative;
`;

export const StyledDivDimens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const StyledDimensions = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const StyledLi = styled.li`
  width: 100%;
  @media (min-width: 425px) {
    width: 50%;
  }
`;
export const StyledInput = styled.input`
  height: 25px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 225, 225);
  padding: 8px 6px;
  outline: none;
  color: rgb(87, 75, 65);
  margin-bottom: 5px;
  display: block;
  background: rgb(248, 248, 248);
  border-radius: 0px;

  &focus,
  &:hover {
    border-color: rgba(0, 161, 82, 0.5);
    box-shadow: 0 0 5px 1px #00a152;
  }
  @media (max-width: 425px) {
    width: 97%;
  }
`;
export const StyledP = styled.p`
  font-size: 10px;
  color: ${(props) => (props.$isBig ? "red" : "grey")};
`;

export const StyledBlockName = styled.p`
  color: #001a34;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const PatternRotation = styled.div`
  /* height: 140px; */
`;
export const StyledImg = styled.img`
  display: block;
  margin-left: 25px;
  width: 125px;
  transform: rotate(90deg);
  transition: all 0.5s;
`;
export const StyledButton = styled.button`
  width: ${(props) => (props.$edge ? `calc(50% - 10px)` : `calc(100%)`)};

  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: #00a152;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #204b37;
  }
  @media (max-width: 425px) {
    min-width: 47%;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 0;
  }
`;

export const StyledSelect = styled.select`
  width: 250px;
  height: 45px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 225, 225);
  padding: 10px 20px;
  outline: none;
  color: rgb(87, 75, 65);
  display: block;
  background: rgb(248, 248, 248);
  border-radius: 0px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const StyledTextArea = styled.textarea`
  width: calc(100% - 16px);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 225, 225);
  padding: 8px 6px;
  outline: none;
  color: rgb(87, 75, 65);
  margin-bottom: 5px;
  display: block;
  background: rgb(248, 248, 248);
  border-radius: 0px;

  &focus,
  &:hover {
    border-color: rgba(0, 161, 82, 0.5);
    box-shadow: 0 0 5px 1px #00a152;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const ChoiceWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
`;
export const FieldChoiceTop = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 2;
  border: 1px solid #c2c2c2;
  &::after {
    content: "";
    width: 45px;
    height: 4px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -50px;

    @media (max-width: 425px) {
      margin-top: -40px;
    }
  }

  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceLeft = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 1;
  border: 1px solid #c2c2c2;
  &::after {
    content: "";
    width: 4px;
    height: 45px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -43px;
    margin-left: 10px;
    @media (max-width: 425px) {
      margin-top: -37px;
      margin-left: 5px;
    }
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceBottom = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 2;
  grid-row-start: 3;
  border: 1px solid #c2c2c2;
  &::after {
    content: "";
    width: 45px;
    height: 4px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 8px;
    @media (max-width: 425px) {
      margin-top: 8px;
    }
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceRight = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 3;
  grid-row-start: 2;
  border: 1px solid #c2c2c2;
  &::after {
    content: "";
    width: 4px;
    height: 45px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -43px;
    margin-right: 10px;
    @media (max-width: 425px) {
      margin-top: -37px;
      margin-right: 4px;
    }
  }
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
  appearance: none;
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
export const DeleteDetailButton = styled.button`
  position: absolute;

  right: 2px;
  display: inline-block;
  padding: 10px 20px;

  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: red;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 425px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;
