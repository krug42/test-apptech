import { css } from 'styled-components';

export const colors = {
  grayBase: '#e9edf0',
  blueBase: '#3cc4d0',
  blueDarker: '#34b4bf',
  navbarNums: '#d9e1e4',
  navbarText: '#98a6a7',
  white: 'white',
  darkLighter: '#99a4a6',
  textBase: '#585252',
  blueLighter: '#83dae3',
  lightPurple: '#ecf0f9',
  asideGray: '#89898b',
  pinkBase: '#eb6c77',
  pinkDarker: '#ed5d68',
  pinkLighter: '#ea8d95',
  orange: '#ea7d3c'
};

const sizes = {
  desktop: 960,
  tablet: 660,
  phone: 320
};

export const media = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${sizes[key]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});