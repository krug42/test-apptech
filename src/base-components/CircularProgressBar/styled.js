import styled from 'styled-components';
import { colors } from '../../utils/global-styles';

export const StyledCircle = styled.svg`
  & .track,
  & .path {
    fill: none;
    stroke-width: ${({ strokeWidth = 10}) => strokeWidth};
  }

  & .track {
    stroke: ${({ trackColor = colors.grayBase}) => trackColor};
  }

  & .path {
    stroke: ${({ pathColor = colors.blueBase}) => pathColor};
    stroke-linecap: butt;
    stroke-linejoin: round;
  }
`;