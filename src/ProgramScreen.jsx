import React, { Component, Fragment } from 'react';
import ProgramForm from './ProgramForm';

function ProgramScreen(props) {
  return <ProgramForm setupAppState={props.handleSumbit}/>;
}

export default ProgramScreen;