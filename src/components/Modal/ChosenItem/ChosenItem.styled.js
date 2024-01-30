import styled from 'styled-components';

export const StyledOption = styled.span`
  font-weight: 400;
  font-size: 16px;
  margin-right: 3px;
`;
export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-left: 3px;
`;

export const Example = styled.div`
  width: 360px;
  height: 360px;
  background-color: rgb(0, 161, 82, 0.1);
  position: relative;

  /* Horizontal line */
  &::before {
    content: '${props =>
      props.$width !== null && props.$width !== 0
        ? props.$width + 'mm'
        : '350mm'}';
    position: absolute;
    display: flex;
    justify-content: center;
    top: 20px;
    left: 50%;
    color: rgb(0, 161, 82);
    font-weight: 600;
    transform: translateX(-50%);
    z-index: 1;
  }

  /* Vertical line */
  &::after {
    content: '${props =>
      props.$height !== null && props.$height !== 0
        ? props.$height + 'mm'
        : '350mm'}';
    position: absolute;
    display: flex;
    justify-content: center;
    color: rgb(0, 161, 82);
    font-weight: 600;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    z-index: 1;
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
`;

export const ExampleItem = styled.div`
  width: ${props =>
    props.$width !== null && props.$width !== 0
      ? props.$width * props.$scale + 'px'
      : '350px'};
  height: ${props =>
    props.$height !== null && props.$height !== 0
      ? props.$height * props.$scale + 'px'
      : '350px'};
  background-color: ${props => (props.$edgeside ? 'transparent' : 'white')};
  border-top: ${props =>
    props.$edgeside === 'top-choice'
      ? '10px solid rgb(0,161,82)'
      : '1px solid rgb(0,161,82, 0.5)'};
  border-bottom: ${props =>
    props.$edgeside === 'choice-bottom'
      ? '10px solid rgb(0,161,82)'
      : '1px solid rgb(0,161,82, 0.5)'};
  border-left: ${props =>
    props.$edgeside === 'left-choice'
      ? '10px solid rgb(0,161,82)'
      : '1px solid rgb(0,161,82, 0.5)'};
  border-right: ${props =>
    props.$edgeside === 'choice-right'
      ? '10px solid rgb(0,161,82)'
      : '1px solid rgb(0,161,82, 0.5)'};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    scale(${props => props.$scale || 1});
`;

export const StyledButton = styled.button.attrs(props => ({
  isimageclicked: props.$isimageclicked ? 'true' : null,
}))`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: ${props => (props.$isimageclicked ? '#ffa700' : 'grey')};

  min-width: 160px;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    min-width: 100%;
  }
`;
StyledButton.shouldForwardProp = prop => prop !== 'isimageclicked';

export const StyledItemName = styled.h1`
  margin-top: 30px;
  color: #00a152;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`;

export const HiddenOnPhone = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;
export const LeftArrow = styled.div`
  height: 50px;
  position: relative;
  display: inline-flex;
  border-top: 2px solid grey;
  margin: ${props =>
    props.$rotate ? '-10px 0px 146px -161px' : '16px 0px 0px 28px'};
  width: 85%;
  transform: ${props => (props.$rotate ? 'rotate(90deg)' : 'rotate(0deg)')};

  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  &::before {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(-45deg);
    top: -9px;
    left: 3px;
  }

  &::after {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    top: 0px;
    left: -8px;
  }
`;
export const TopArrow = styled.div`
  height: 50px;
  position: relative;
  display: inline-flex;
  border-top: 2px solid grey;
  margin: ${props => (props.$rotate ? ' 235px 0px -8px -144px' : '0')};
  transform: ${props => (props.$rotate ? 'rotate(90deg)' : 'rotate(0deg)')};

  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  &::before {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);

    top: ${props => (props.$rotate ? '0px' : '-9px')};
    left: ${props => (props.$rotate ? '-18px' : '-18px')};
  }

  &::after {
    border-top: 2px solid grey;
    width: 15px;
    height: 15px;
    transform: rotate(-45deg);
    top: ${props => (props.$rotate ? '10px' : '0px')};
    left: ${props => (props.$rotate ? '-8px' : '-7px')};
  }
`;

export const WrapInfo = styled.div`
  margin-bottom: 10px;
`;
