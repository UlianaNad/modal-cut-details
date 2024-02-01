import styled from "styled-components";

export const AppWrapper = styled.div`
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Item = styled.li`
  display: block;
  padding: 10px;
  border: 1px solid green;
  border-radius: 10px;
  margin: 5px;
  list-style: none;
  width: 250px;
`;
