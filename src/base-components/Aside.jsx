import styled from 'styled-components';
import { colors } from '../utils/colors';

const Aside = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  width: 33.3%;
  padding: 0 1.2em 1.2em;
  margin-top: 2%;
  color: ${colors.asideGray};
  background-color: ${colors.lightPurple};
`;

export const AsideText = styled.div`
  margin-top: ${props => props.big ? '0.8em' : '0.3em'};;
  font-size: ${props => props.big ? '1.7em' : '1.1em'};
  font-weight: ${props => props.big ? 400 : 400};
  text-transform: ${props => props.big ? 'uppercase' : 'none'};
`;

export default Aside;