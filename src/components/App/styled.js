import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 2.5em;
  font-size: 2vw;

  @media (min-width: 768px) {
    font-size: 1.6vw;
  }

  @media (min-width: 960px) {
    font-size: 1.2vw;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 120px;

  li {
    width: 33.3%;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
  }

  @media (min-width: 1440px) {
    font-size: 0.75em;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  padding-right: 25%;
  text-align: right;
  background-color: ${props => props.active ? colors.blueBase : colors.grayBase}; 
  color: ${props => props.active ? colors.white : colors.navbarText};
  position: relative;
  overflow: hidden;

  &::after {
    content: '${props => props.count}';
    position: absolute;
    bottom: 35px;
    right: 0;
    z-index: 1;
    height: 100%;
    color: ${props => props.active ? colors.blueDarker : colors.navbarNums};
    font-size: 160px;
    font-weight: 400;
    vertical-align: bottom;
  }
`;

export const Text = styled.span`
  display: block;
  font-size: ${props => props.primary ? '2.4em' : '1.2em'};
  font-weight: ${props => props.primary ? '300' : '400'};
  text-transform: ${props => props.primary ? 'uppercase' : 'lowercase'};
  z-index: 2;
`