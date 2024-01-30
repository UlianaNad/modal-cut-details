import styled from "styled-components";

export const WrapDetail = styled.div`
  position: relative;
`;
export const StyledMoreButton = styled.div`
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
export const WrapSections = styled.div`
  display: flex;
  justify-content: space-between;
  color: #001a34;

  section {
    width: 48%;
  }
`;
