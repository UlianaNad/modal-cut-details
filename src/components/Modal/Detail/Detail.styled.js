import styled from "styled-components";

export const WrapDetail = styled.div``;

export const WrapSections = styled.div`
  display: flex;
  justify-content: space-between;
  color: #001a34;

  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  section {
    width: 48%;
    /* &:last-child {
      padding-bottom: ${(props) =>
      props.$isSaved === true ? `130px` : `0`}; */

    @media (max-width: 915px) {
      width: 100%;
    }
    /* @media (max-width: 915px) {
      padding-bottom: ${(props) => (props.$isSaved === true ? `100px` : `0`)};
    } */
  }
  @media (max-width: 915px) {
    flex-direction: column;
  }
`;
export const StyledSaveButton = styled.button`
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
  background-color: #ffa700;
  margin-left: 52%;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    padding: 6px 10px;
    margin-right: 0;
    min-width: 0;
  }
  @media (max-width: 915px) {
    margin-left: 0;
  }
`;
export const StyledUpdateButton = styled.button`
  /* position: absolute;
  bottom: -197px;
  left: 0; */
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
  background-color: #ffa700;
  margin-left: 52%;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    padding: 6px 10px;
    margin-right: 0;
    min-width: 0;
    //bottom: -1181px;
  }
  @media (max-width: 915px) {
    margin-left: 0;
    /* bottom: -907px;
    left: 20px; */
  }
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
