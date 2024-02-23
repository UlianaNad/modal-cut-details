import styled from "styled-components";

export const AppWrapper = styled.div`
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;
  height: 100vh;
  ul,
  li,
  p,
  h1,
  h2,
  h3 {
    padding: 0;

    list-style: none;
  }
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
