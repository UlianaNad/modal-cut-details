import styled from "styled-components";

export const StyledOption = styled.span`
  font-weight: 400;
  font-size: 16px;
  margin-right: 3px;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-left: 3px;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button.attrs((props) => ({
  isimageclicked: props.$isimageclicked ? "true" : null,
}))`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: ${(props) => (props.$isimageclicked ? "#ffa700" : "grey")};

  min-width: 160px;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    min-width: 100%;
  }
`;
StyledButton.shouldForwardProp = (prop) => prop !== "isimageclicked";

export const StyledItemName = styled.h1`
  color: #00a152;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 425px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const HiddenOnPhone = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const WrapInfo = styled.div`
  margin-bottom: 16px;
`;
export const ModalButton = styled.button`
  position: fixed;
  top: 15px;
  left: 30%;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  z-index: 130;
  background-color: #00a152;
  color: white;
  font-weight: 600;

  @media (min-width: 768px) {
    display: none;
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
    padding: 10px 15px;
    font-size: 12px;
  }
`;
export const WrapDetail = styled.div`
  margin-top: 35px;
  display: ${(props) => (props.$detail === true ? "flex" : "block")};
  flex-direction: ${(props) =>
    props.$detail === true ? "row-reverse" : "column"};
  justify-content: ${(props) =>
    props.$detail === true ? "space-between" : ""};
`;

export const WrapToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c48000;
  cursor: pointer;
  /* margin-top: 20px; */
  color: #001a34;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  /* margin-bottom: 10px; */

  @media (max-width: 425px) {
    margin-top: 10px;
  }

  span {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  p {
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;
