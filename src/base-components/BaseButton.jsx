import styled from 'styled-components';
import { colors } from '../utils/colors';

const BaseButton = styled.button`
  padding: 1em;
  font-size: 1.2em;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 3px;
  border: 1px solid ${colors.navbarNums};
  background-color: ${colors.grayBase};

  ${({ primary }) => primary && `
    background-color: ${colors.blueBase};
    color: ${colors.white};
    border-color: ${colors.blueDarker};
  `}
  ${({ important }) => important && `
    background-color: ${colors.pinkBase};
    color: ${colors.white};
    border-color: ${colors.pinkLighter};
  `}
  ${({ disabled, primary, important }) => {
    if (disabled && primary) return `
      background-color: ${colors.blueLighter};
      border-color: ${colors.blueBase};`;
    else if (disabled && important) return `
      background-color: ${colors.pinkLighter};
      border-color: ${colors.pinkBase};`;
    else if (disabled) return `
      background-color: ${colors.white};
      border-color: ${colors.navbarText};`;
    }}
`;

export default BaseButton;

// ${props => props.primary ? 
//   (props.disabled? colors.blueBase : colors.blueDarker) :
//   (props.disabled? colors.grayLighter : colors.grayBase)};
// background-color: ${props => props.primary ? 
//   (props.disabled ? colors.blueDisabled : colors.blueBase) :
//   (props.disabled ? colors.grayBase : colors.grayLighter)};