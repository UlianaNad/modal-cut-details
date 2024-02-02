import styled from "styled-components";

export const StyledOverlayMini = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 110;
`;

export const StyledModalMini = styled.div`
  width: calc(100vw - 100px);
  height: calc(100vh - 100px);
  background-color: white;

  position: relative;
`;
