import React from 'react';
import { Wrapper } from './styled';

function RangePicker(props) {
  const { color, min, max, step, value, handleChange } = props;

  return (
    <Wrapper color={color}>
      <input class="range" type="range" min={min} max={max} step={step} value={value} onChange={handleChange} />
      <progress class="progress" min={min} max={max} step={step} value={value} />
      <span class="track"></span>
    </Wrapper>
    );
}

export default RangePicker;