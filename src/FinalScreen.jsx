import React, { Component, Fragment } from 'react';

class FinalScreen extends Component {
  render() {
    const { 
      program,
      moneyAmount,
      monthsAmount,
      initialPayment,
      monthlyPayment } = this.props;

    const result = 120 / (((Number(initialPayment) + 6 * Number(monthlyPayment)) * 10000) / (Number(moneyAmount) * Number(monthsAmount)));
    
    return (
      <Fragment>
        <div>Примерное время ожидания составит</div>
        <div><b>{`${Math.ceil(result)} месяцев`}</b></div>
      </Fragment>
    );
  }
}

export default FinalScreen;