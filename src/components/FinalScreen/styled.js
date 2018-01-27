import styled from 'styled-components';
import { colors } from '../../utils/colors';
import BaseButton from '../../base-components/BaseButton';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 66.6%;
  margin-top: 2%;
  padding: 0 3em;
`;

export const CenteredText = styled.p`
  margin: 3% auto 0;
  font-size: 1.6em;
  color: ${colors.textBase};
`;

export const Circle = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 4px solid ${colors.blueBase};
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  color: ${colors.blueBase};
  margin: 3% auto 0;

  @media (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

export const Num = styled.span`
  font-size: 3em;
  margin: auto auto 0;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Sign = styled.span`
  font-size: 1.1em;
  margin: 0 auto auto;
`;

export const Ul = styled.ul`
  margin-left: 11%;
  padding-left: 1em;
  font-size: 1.3em;
  list-style: none;
  color: ${colors.textBase};

  > li:before {
    display: inline-block;
    content: "-";
    width: 1em;
    margin-left: -1em;
  }
`;

export const Button = BaseButton.extend`
  flex-grow: 1;
  margin: 0 5%;

  &:first-of-type {
    margin-right: 2%;
  }

  &:last-of-type {
    margin-left: 2%;
  }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: 3%;
`;