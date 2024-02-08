import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  background-color: white;
  overflow-y: scroll;
  position: relative;
  padding: 20px;
`;
export const StyledCloseButton = styled.button`
  right: 4px;
  display: flex;
  padding: 4px 5px;
  margin-right: 15px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background: #ffa700;
  transition: 0.4s;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  z-index: 100;

  svg {
    fill: white;
  }

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    margin-bottom: 0;
    position: fixed;
    right: 0px;
    top: 14px;
    padding: 0px 0px;
  }
`;
export const WrapButtons = styled.div`
  position: fixed;
  bottom: 15px;
  left: 25px;

  right: 35px;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: inherit;
  }

  @media (max-width: 425px) {
    bottom: 5px;
    left: 20px;
    gap: 20px;
    right: 20px;
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
  &.disabled {
    background-color: gray;
  }
  &:hover {
    background-color: #204b37;
  }
  @media (max-width: 425px) {
    min-width: 47%;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 0;
    white-space: pre-wrap;
  }
`;
export const StyledMoreButton = styled.button`
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
  background-color: #ffa700;

  position: relative;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    padding: 5px 10px;
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
