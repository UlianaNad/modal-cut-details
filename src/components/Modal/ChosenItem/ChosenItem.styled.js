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
  margin-top: 30px;
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
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const WrapInfo = styled.div`
  margin-bottom: 10px;
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
