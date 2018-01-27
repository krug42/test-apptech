import React from 'react';
import ProgramForm from '../ProgramForm';
import { Wrapper, FormWrapper, TextWrapper } from './styled';

function ProgramScreen(props) {
  return (
    <Wrapper>
      <FormWrapper>
        <ProgramForm setupAppState={props.setupAppState}/>
      </FormWrapper>
      <TextWrapper>
        <p>
          Lorem ipsum dolor sit amet, cu invenire indoctum vis, dolor nonumes voluptatum pri ex. Nusquam scriptorem te cum, no aliquip tacimates delicata eos. 
          Nominavi interpretaris ius eu, suas erant munere ut vim. Et partiendo inciderint quo. Minim primis sed ad, per utamur scripta sanctus no, id pro numquam sensibus.
        </p>
        <p>
          Eros singulis in vis, usu et detraxit adversarium. Fugit laudem ex his. Populo utamur definitionem pro et. 
          Nihil signiferumque sea ut, his vero graeci expetendis ei, ullum erant phaedrum an mei. 
          No tamquam tractatos adversarium quo, autem legendos imperdiet no eam. Persius gloriatur vituperatoribus cu cum.
        </p>
      </TextWrapper>
    </Wrapper>
    );
  }

export default ProgramScreen;