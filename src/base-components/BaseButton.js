import styled from 'styled-components';
import { colors } from '../utils/global-styles';

const BaseButton = styled.button`
  padding: 1em 0;
  font-size: 1.2em;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 3px;
  border: 1px solid ${colors.navbarNums};
  background-color: ${colors.grayBase};
  user-select: none;
  cursor: pointer;

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
      border-color: ${colors.blueBase};
      cursor: default;`;
    else if (disabled && important) return `
      background-color: ${colors.pinkLighter};
      border-color: ${colors.pinkBase};
      cursor: default;`;
    else if (disabled) return `
      background-color: ${colors.white};
      border-color: ${colors.navbarText};
      cursor: default;`;
    }}
`;

export default BaseButton;