import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

export const FormWrapper = styled.div`
  width: 33.3%;
`;

export const TextWrapper = styled.div`
  width: 66.6%;
  padding: 1em;
  font-size: 1.5em;
  color: ${colors.textBase};
`;