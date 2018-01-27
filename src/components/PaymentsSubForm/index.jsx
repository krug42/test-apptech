import React, { Fragment } from 'react';
import { NumberInput, Text } from './styled';

function PaymentsForm(props) {
  const { value: moneyAmount, text, maxAmount, type, handleChange } = props;

  return (
    <Fragment>
      <div>{`${text}: ${moneyAmount} р.`}</div>
      <Text>Сумма</Text>
      <NumberInput type="number" value={moneyAmount} onChange={handleChange(type)} min="0" max={maxAmount}/>
      <input type="range" value={moneyAmount} onChange={handleChange(type)} step="100" min="0" max={maxAmount}/>
    </Fragment>
  );
}

export default PaymentsForm;