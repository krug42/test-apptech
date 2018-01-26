import React, { Component, Fragment } from 'react';
import PaymentsSubForm from './PaymentsSubForm';

class PaymentsScreen extends Component {
  state = {
    initialPayment: 9000,
    monthlyPayment: 3000
  }
  
  handleChange = (type) => (e) => {
    this.setState({
      [type]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setupAppState({
      openedScreenIndex: 3,
      initialPayment: this.state.initialPayment,
      monthlyPayment: this.state.monthlyPayment
    });
  }

  render() {
    const { initialPayment, monthlyPayment } = this.state;
    const { moneyAmount, monthsAmount, program } = this.props;

    return (
      <Fragment>
        <div>
          Выбрана программа: {(program === 'auto') ? 'Автомобиль' : 'Недвижимость'}
        </div>
        <div>Сумма: {moneyAmount} руб.</div>
        <div>Срок: {monthsAmount} мес.</div>
        <form onSubmit={this.handleSubmit}>
          <PaymentsSubForm 
            text="Первоначальный взнос"
            maxAmount="100000"
            value={initialPayment}
            handleChange={this.handleChange}
            type="initialPayment"/>
          <PaymentsSubForm 
            text="Ежемесячный взнос"
            maxAmount="10000"
            value={monthlyPayment}
            handleChange={this.handleChange}
            type="monthlyPayment"/>
          <button type="submit">Рассчитать</button>
        </form>
      </Fragment>
    );
  }
}

export default PaymentsScreen;