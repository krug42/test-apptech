import React, { Component } from 'react';
import PaymentsSubForm from '../PaymentsSubForm';
import Aside, { AsideText } from '../../base-components/Aside';
import { Wrapper, Form, SubFormWrapper, Button } from './styled';

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
    const { moneyAmount, monthsAmount, program, setupAppScreen } = this.props;

    return (
      <Wrapper>
        <Aside>
          <AsideText big>Выбранная программа</AsideText>
          {(program === 'auto') ? 
            <AsideText>Новая программа по автомобилю</AsideText> :
            <AsideText>Новая программа по недвижимости</AsideText>}
          <AsideText big>Параметры</AsideText>
          <AsideText>Сумма займа - {moneyAmount} руб.</AsideText>
          <AsideText>Срок займа - {monthsAmount} мес.</AsideText>
          <AsideText big>Выбранная стратегия</AsideText>
          <AsideText>Первоначальный взнос - {initialPayment} руб.</AsideText>
          <AsideText>Ежемесячный взнос - {monthlyPayment} мес.</AsideText>
        </Aside>
        <Form onSubmit={this.handleSubmit}>
          <SubFormWrapper>
            <PaymentsSubForm 
              text="Первоначальный взнос"
              maxAmount="100000"
              value={initialPayment}
              handleChange={this.handleChange}
              type="initialPayment"/>
          </SubFormWrapper>
          <SubFormWrapper>
            <PaymentsSubForm 
              text="Ежемесячный взнос"
              maxAmount="10000"
              value={monthlyPayment}
              handleChange={this.handleChange}
              type="monthlyPayment"/>
          </SubFormWrapper>
          <Button onClick={setupAppScreen(1)}>Перерасчёт</Button>
          <Button type="submit" primary>Рассчитать</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default PaymentsScreen;