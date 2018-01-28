import styled from 'styled-components';
import { colors, media } from '../../utils/global-styles';
import BaseButton from '../../base-components/BaseButton';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${media.tablet`
    flex-flow: row nowrap;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-top: 1em;
  padding: 0;

  ${media.tablet`
    width: 66.6%;
  `}
`;

export const CenteredText = styled.p`
  margin: 1em auto 0;
  font-size: 1.2em;
  text-align: center;
  color: ${colors.textBase};

  ${media.tablet`
    font-size: 1.3em;
  `};

  ${media.desktop`
    font-size: 1.5em;
  `};
`;

export const Circle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 4px solid ${colors.blueBase};
  border-radius: 50%;
  width: 40vw;
  height: 40vw;
  color: ${colors.blueBase};
  margin: 3% auto 0;

  ${media.tablet`
    width: 25vw;
    height: 25vw;
  `}

  ${media.desktop`
    width: 15vw;
    height: 15vw;
  `}
`;

export const Num = styled.span`
  font-size: 3em;
  margin: auto auto 0;
  font-weight: 300;
  }
`;

export const Sign = styled.span`
  font-size: 1.1em;
  margin: 0 auto auto;
`;

export const Ul = styled.ul`
  padding-left: 0;
  font-size: 1.1em;
  list-style: none;
  color: ${colors.textBase};

  > li {
    margin-left: 1em;

    &:before {
      display: inline-block;
      content: "-";
      width: 1em;
      margin-left: -1em;
    }
  }

  ${media.tablet`
    font-size: 1.2em;

    > li {
      margin-left: 1.5em;
    }
  `}

  ${media.desktop`
    font-size: 1.3em;
  `}
`;

export const RecomendationWrapper = styled.div`
  margin: 0 auto;
`;

export const Button = BaseButton.extend`
  flex-grow: 1;
  margin: 0;

  &:first-of-type {
    margin-right: 2%;
  }

  &:last-of-type {
    margin-left: 2%;
  }

  ${media.tablet`
    margin: 0 5%;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 1em;
`;