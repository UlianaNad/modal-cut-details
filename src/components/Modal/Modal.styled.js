import styled from "styled-components";
import { StyledVisualBlockText } from "./ChosenItem/ChosenItem.styled";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100lvw;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1200;
`;

export const StyledModal = styled.div`
  width: 100lvw;

  height: ${(props) => props.$height && props.$height + "px"};
  background-color: white;
  overflow-y: scroll;
  position: relative;
`;

export const WrapModal = styled.div`
  padding: 0px 30px 30px 30px;
  @media (max-width: 968px) {
  }
  @media (max-width: 425px) {
    padding: 0px 20px 35px 20px;
  }
`;
export const StyledTitle = styled.p`
  text-align: center;
  color: #00a152;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  margin-top: 35px;
  margin-bottom: 0px;
  @media (max-width: 425px) {
    margin-top: 10px;
    font-size: 14px;
  }
  span {
    color: black;
  }
`;
export const StyledCloseButton = styled.button`
  position: absolute;
  top: 35px;
  right: 15px;
  display: flex;
  padding: 4px 5px;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background: #ffa700;
  z-index: 100;

  svg {
    fill: white;
  }

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 768px) {
    right: 10px;
    top: 10px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    margin-bottom: 0;
    position: fixed;
    right: 15px;
    top: 10px;
    padding: 5px 5px;
  }
`;
export const WrapButtons = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: inherit;
  }

  @media (max-width: 425px) {
    gap: 20px;
  }
`;

export const WrapDetail = styled.div`
  position: relative;
`;
export const StyledButton = styled.button`
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
    padding: 10px 15px;
    margin-right: 0;
    white-space: pre-wrap;
  }
`;
export const StyledAddDetailButton = styled(StyledButton)`
  background-color: #ffa700;

  &:hover {
    background-color: #c48000;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    padding: 10px 15px;
    margin-right: 0;
    min-width: 0;
    white-space: pre-wrap;
  }
`;

export const StyledText = styled.p`
  text-align: center;
  margin-top: 30px;
  padding-bottom: 20px;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledItemName = styled.h1`
  margin-top: 30px;
  color: #00a152;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 425px) {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
export const StyledInfo = styled.p`
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
  @media (max-width: 425px) {
    margin-top: 50px;
    font-size: 18px;
  }
`;

export const WrapSections = styled.div`
  display: flex;
  justify-content: space-between;
  color: #001a34;

  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  section {
    width: 48%;
    @media (max-width: 915px) {
      width: 100%;
    }
  }
  @media (max-width: 915px) {
    flex-direction: column;
  }
`;
export const StyledListText = styled(StyledVisualBlockText)`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
