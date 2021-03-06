import styled from 'styled-components';
import { colors } from '../../utils/global-styles';

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
  line-height: 1.5em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1em;
  align-items: center;

  > span {
    text-align: center;
    font-size: 1.3em;
    margin: 0 auto;
    max-width: 100%;

    /* some dirty fix */
    @media (min-width: 770px) and (max-width: 891px) {
      &:first-child {
        height: 3em;
      }
  }
`;