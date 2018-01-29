import React from 'react';
import { Wrapper } from './styled';

function RangePicker(props) {
  const { color, min, max, step, value, handleChange } = props;

  return (
    <Wrapper color={color}>
      <input className="range" type="range" min={min} max={max} step={step} value={value} onChange={handleChange} />
      <progress className="progress" min={min} max={max} step={step} value={value} />
      <span className="track"></span>
    </Wrapper>
    );
}

export default RangePicker;