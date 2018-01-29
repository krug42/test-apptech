import styled from 'styled-components';
import { colors } from '../../utils/global-styles';

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

export const Input = styled.input`
  padding: 1.3em 0.65em;
  border: 1px solid ${colors.navbarNums};
  border-radius: 8px;
  background-color: ${colors.grayBase};
  margin-bottom: 1.5em;
  font-size: 1.5em;
  color: ${colors.textBase};
  width: 100%;
`;

export const Select = Input.withComponent('select');