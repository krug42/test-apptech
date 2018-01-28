import React, { Fragment } from 'react';
import { NumberInput, Text, Wrapper } from './styled';
import CircularProgressBar from '../../base-components/CircularProgressBar';

function PaymentsForm(props) {
  const { value: moneyAmount, children, maxAmount, type, handleChange, color } = props;
  const percentage = moneyAmount / maxAmount * 100;
  console.log(percentage)

  return (
    <Fragment>
      <Wrapper>
        <CircularProgressBar
              strokeWidth="35"
              size="150"
              percentage={percentage}
              pathColor={color}/>
      </Wrapper>
      <Wrapper>
        <Text>{children}</Text>
        <Text>{`${moneyAmount} р.`}</Text>
      </Wrapper>
      <Text>Сумма</Text>
      <NumberInput type="number" value={moneyAmount} onChange={handleChange(type)} min="0" max={maxAmount}/>
      <input type="range" value={moneyAmount} onChange={handleChange(type)} step="100" min="0" max={maxAmount}/>
    </Fragment>
  );
}

export default PaymentsForm;