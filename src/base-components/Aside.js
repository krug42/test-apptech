import styled from 'styled-components';
import { colors, media } from '../utils/global-styles';

const Aside = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0 1.2em 1.2em;
  margin: 1.5em 0;
  color: ${colors.asideGray};
  background-color: ${colors.lightPurple};
  order: 1;

  ${media.tablet`
    width: 33.3%;
    order: 0;
  `}
`;

export const AsideText = styled.div`
  margin-top: ${({ big }) => big ? '0.8em' : '0.3em'};;
  font-size: ${({ big }) => big ? '1.7em' : '1.1em'};
  font-weight: ${({ big }) => big ? 400 : 400};
  text-transform: ${({ big }) => big ? 'uppercase' : 'none'};
`;

export default Aside;