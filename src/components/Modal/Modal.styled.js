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
  width: calc(100vw - 100px);
  height: calc(100vh - 50px);
  background-color: white;
  overflow-y: scroll;
  position: relative;
  padding: 20px;

  @media (max-width: 425px) {
    padding: 10px;
  }
`;
export const StyledCloseButton = styled.button`
  position: absolute;
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
    min-width: 50px;
    font-size: 12px;
    padding: 5px 10px;
    margin-bottom: 0;
    position: fixed;
    right: 30px;
    top: 40px;
  }
`;
export const WrapButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
`;

export const WrapDetail = styled.div`
  position: relative;
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
  /* min-width: 235px; */
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
  }
`;
