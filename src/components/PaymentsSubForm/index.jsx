import React, { Fragment } from 'react';
import { NumberInput, Text, Wrapper } from './styled';
import CircularProgressBar from '../../base-components/CircularProgressBar';
import RangePicker from '../../base-components/RangePicker';

function PaymentsForm(props) {
  const { value: moneyAmount, children, minAmount, maxAmount, type, handleChange, color } = props;
  const percentage = moneyAmount / maxAmount * 100;

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
      <NumberInput type="number" value={moneyAmount} onChange={handleChange(type)} min={minAmount} max={maxAmount}/>
      <RangePicker value={moneyAmount} handleChange={handleChange(type)} color={color} min="0" step="100" max={maxAmount}/>
    </Fragment>
  );
}

export default PaymentsForm;