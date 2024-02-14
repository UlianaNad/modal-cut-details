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
export const StyledVisualBlockText = styled(StyledItemName)`
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const HiddenOnPhone = styled.div`
  /* margin-top: 30px; */
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
  display: inline-block;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: red;
  align-self: flex-end;
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
  /* margin-top: 35px; */
  display: ${(props) => (props.$detail === true ? "flex" : "block")};
  flex-direction: ${(props) =>
    props.$detail === true ? "row-reverse" : "column"};
  justify-content: ${(props) => (props.$detail === true ? "space-around" : "")};
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${(props) => (props.$chosenItem === true ? "50px" : "35px")};
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const WrapToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #001a34;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 425px) {
    margin-top: 10px;
  }

  span {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  p {
    margin-bottom: 5px;
    margin-top: 5px;
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;
export const WrapList = styled.div``;
export const StyledSection = styled.section`
  gap: 10px;
  padding: ${(props) =>
    props.$detail === true
      ? props.$open
        ? "10px 50px 35px"
        : "10px 20px 10px"
      : "0"};

  border-bottom-left-radius: ${(props) =>
    props.$detail === true ? "10px" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.$detail === true ? "10px" : "0"};
  box-shadow: ${(props) =>
    props.$detail === true ? "0px 3px 4px lightgrey" : "0"};

  @media (max-width: 1128px) {
    padding: ${(props) =>
      props.$detail === true
        ? props.$open
          ? "10px 30px 25px"
          : "10px 20px 10px"
        : "0"};
  }
  @media (max-width: 968px) {
    padding: ${(props) =>
      props.$detail === true
        ? props.$open
          ? "10px 20px 20px"
          : "10px 20px 10px"
        : "0"};
  }
  @media (max-width: 425px) {
    padding: ${(props) =>
      props.$detail === true
        ? props.$open
          ? "10px 10px 10px"
          : "10px 20px 10px"
        : "0"};
  }
`;
