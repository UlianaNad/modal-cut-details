import styled from "styled-components";

export const StyledOverlayMini = styled.div`
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

export const StyledModalMini = styled.div`
  width: calc(100vw - 100px);
  height: calc(100vh - 50px);
  background-color: white;
  overflow-y: scroll;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    /* padding: 10px; */
    width: 100vw;
    height: 100vh;
  }
`;
