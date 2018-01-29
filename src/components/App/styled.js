import styled from 'styled-components';
import { colors, media } from '../../utils/global-styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5em;

  ${media.desktop`
    padding: 1em 2em;
  `}
`;

export const Navbar = styled.ul`
  display: flex;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  li {
    width: 33.3%;
  }

  ${media.tablet`
    height: 120px;
  `}
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 0.25em;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ active }) => active ? colors.blueBase : colors.grayBase}; 
  color: ${({ active }) => active ? colors.white : colors.navbarText};
  overflow: hidden;
  user-select: none;
  
  &::after {
    content: '${({ count }) => count}';
    position: absolute;
    right: 0;
    bottom: 22px;
    z-index: 1;
    height: 100%;
    color: ${({ active }) => active ? colors.blueDarker : colors.navbarNums};
    font-size: 98px;
    font-weight: 400;
    vertical-align: bottom;
  }

  ${media.tablet`
    padding: 1.5em 8% 0 0.5em;
    justify-content: flex-start;
    align-items: flex-end;
    
    &::after {
      bottom: 35px;
      font-size: 160px;
    }
  `}

  ${media.desktop`
    padding-right: 14%;
  `}
`;

export const NavText = styled.span`
  display: none;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;

  ${media.tablet`
    display: block;
    margin: 0.25em 0 0;
    font-size: 1.1em;
    font-weight: 400;
    text-transform: lowercase;
    text-align: right;
  `}

  ${media.desktop`
    font-size: 1.2em;
  `}
`

export const NavHeader = NavText.extend`
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1em;

  ${media.tablet`
    margin: 0;
    font-size: 2.2em;
    font-weight: 300;
    text-transform: uppercase;
  `}

  ${media.desktop`
    font-size: 2.4em;
  `}
`;
