import React, { Component, Fragment } from 'react';

class PaymentsForm extends Component {
  state = {
    moneyAmount: this.props.defaultValue
  }
  
  render() {
    const { value: moneyAmount, text, maxAmount, type } = this.props;

    return (
      <Fragment>
        <div>{`${text}: ${moneyAmount} р.`}</div>
        <input type="number" value={moneyAmount} onChange={this.props.handleChange(type)} min="0" max={maxAmount}/>
        <input type="range" value={moneyAmount} onChange={this.props.handleChange(type)} step="100" min="0" max={maxAmount}/>
      </Fragment>
    );
  }
}

export default PaymentsForm;