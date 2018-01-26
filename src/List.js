import React, { Component, Fragment } from 'react';

function List(props) {
  return (
    <Fragment>
      {`hello ${props.name}`}
    </ Fragment>
  )
}

export default List;