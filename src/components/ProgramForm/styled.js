import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Form = styled.form`
display: flex;
flex-flow: column nowrap;
padding: 1.5em;
`;

export const Input = styled.input`
padding: 1.3em 0.65em;
border: 1px solid ${colors.navbarNums};
border-radius: 8px;
background-color: ${colors.grayBase};
margin-bottom: 10%;
font-size: 1.5em;
color: ${colors.textBase};
`;

export const Select = styled.select`
padding: 1.3em 0.65em;
border: 1px solid ${colors.navbarNums};
border-radius: 8px;
background-color: ${colors.grayBase};
margin-bottom: 10%;
font-size: 1.5em;
color: ${colors.textBase};
`;