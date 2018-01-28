import styled from 'styled-components';
import BaseButton from '../../base-components/BaseButton';
import { media } from '../../utils/global-styles';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${media.tablet`
    flex-flow: row nowrap;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 1.5em 0;

  ${media.tablet`
    width: 66.6%;
  `}
`;

export const SubFormWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-bottom: 1em;

  ${media.tablet`
    width: 40%;
  `}
`;

export const Button = BaseButton.extend`
  width: 48%;
  &:first-of-type {
    margin-right: 2%;
  }

  &:last-of-type {
    margin-left: 2%;
  }


  ${media.tablet`
    width: 40%;
    font-size: 1em;
    
    &:first-of-type {
      margin-left: 4%;
    }

    &:last-of-type {
      margin-right: 4%;
    }
  `}
`;