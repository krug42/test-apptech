import styled from 'styled-components';
import { colors, media } from '../../utils/global-styles';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${media.tablet`
    flex-flow: row nowrap;
    justify-content: space-around;
  `}
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 1em;

  ${media.tablet`
    width: 50%;
    padding-top: 1.5em;
  `}

  ${media.desktop`
    width: 33.3%;
    padding: 1.5em;
  `}
`;

export const TextWrapper = FormWrapper.extend`
  font-size: 1.3em;
  color: ${colors.textBase};
  padding-top: 0;

  ${media.tablet`
    padding-top: 1em;
    width: 50%;
  `}

  ${media.desktop`
    width: 66.6%;
  `}
`;