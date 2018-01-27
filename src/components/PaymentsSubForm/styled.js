import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const NumberInput = styled.input`
  border: none;
  font-size: 2em;
  color: ${colors.textBase};
  margin: 5% 0 0 5%;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Text = styled.span`
  font-size: 1.1em;
`;