import styled from 'styled-components';

export const ChoiceWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
`;
export const FieldChoiceTop = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 2;
  border: 1px solid #c2c2c2;
  &::after {
    content: '';
    width: 45px;
    height: 4px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -50px;

    @media (max-width: 425px) {
      margin-top: -40px;
    }
  }

  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceLeft = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 1;
  border: 1px solid #c2c2c2;
  &::after {
    content: '';
    width: 4px;
    height: 45px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -43px;
    margin-left: 10px;
    @media (max-width: 425px) {
      margin-top: -37px;
      margin-left: 5px;
    }
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceBottom = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 2;
  grid-row-start: 3;
  border: 1px solid #c2c2c2;
  &::after {
    content: '';
    width: 45px;
    height: 4px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 8px;
    @media (max-width: 425px) {
      margin-top: 8px;
    }
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const FieldChoiceRight = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 6px;
  grid-column-start: 3;
  grid-row-start: 2;
  border: 1px solid #c2c2c2;
  &::after {
    content: '';
    width: 4px;
    height: 45px;
    background-color: #204b37;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -43px;
    margin-right: 10px;
    @media (max-width: 425px) {
      margin-top: -37px;
    margin-right: 4px;
    }
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;
export const SpanLabel = styled.span`
  display: flex;
  justify-content: center;
  margin-top: -27%;
  font-size: 13px;
  font-weight: 700;
  color: #001a34;
`;

export const StyledInputCheckbox = styled.input`
  appearance: none;
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 6px;

  &:checked {
    background-color: rgb(2, 144, 74, 0.3);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'%3E%3Cpath fill='%2343A047' d='M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
  }
  &:hover {
    background-color: rgb(2, 144, 74, 0.3);
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
  
  }
`;
