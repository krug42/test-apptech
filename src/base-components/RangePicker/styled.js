import styled from 'styled-components';
import { colors } from '../../utils/global-styles';

export const Wrapper = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  height: 26px;
  width: 100%;
  
  .range {
    background: transparent;
    appearance: none;
    width: 100%;
    margin: 0;
    padding: 10px 0;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 0;
      height: 0;
      border: 10px solid transparent;	
      border-bottom: 18px solid ${({ color }) => color || colors.blueBase};
      cursor: pointer;
      margin-top: -3px;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: ${({ trackHeight }) => trackHeight || 5}px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
  }

  .progress {
    appearance: none;
    border: none;
    display: flex;
    position: absolute;
    left: 0;
    height: ${({ trackHeight }) => trackHeight || 5}px;
    width: 100%;
    z-index: -1;
    border-radius: 5px;
    padding: 0 10px;

    &::-webkit-progress-bar {
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    &::-webkit-progress-value {
      border-radius: 5px;
      background: ${({ color }) => color || colors.blueBase};
    }
  }

  .track {
    display: flex;
    position: absolute;
    right: 10px;
    left: 10px;
    height: ${({ trackHeight }) => trackHeight || 5}px;
    cursor: pointer;
    background: ${colors.lightPurple};
    z-index: -2;
    border-radius: 5px;
  }
`;