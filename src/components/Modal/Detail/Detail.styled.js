import styled from "styled-components";

export const WrapDetail = styled.div``;

export const WrapSections = styled.div`
  display: flex;
  justify-content: space-between;
  color: #001a34;

  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  section {
    width: 48%;
    &:last-child {
      padding-bottom: ${(props) => (props.$isSaved === true ? `130px` : `0`)};
    }
    @media (max-width: 915px) {
      width: 100%;
    }
    @media (max-width: 915px) {
      padding-bottom: ${(props) => (props.$isSaved === true ? `100px` : `0`)};
    }
  }
  @media (max-width: 915px) {
    flex-direction: column;
  }
`;
