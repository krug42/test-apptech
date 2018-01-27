import styled from 'styled-components';
import BaseButton from '../../base-components/BaseButton';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 66.6%;
  margin-top: 2%;
`;

export const SubFormWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 40%;
`;

export const Button = BaseButton.extend`
  width: 40%;
  font-size: 1em;
  
  &:first-of-type {
    margin-left: 4%;
  }

  &:last-of-type {
    margin-right: 4%;
  }
`;