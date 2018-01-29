import React, { Component } from 'react';
import PaymentsSubForm from '../PaymentsSubForm';
import Aside, { AsideText } from '../../base-components/Aside';
import { Wrapper, Form, SubFormWrapper, Button } from './styled';
import { colors } from '../../utils/global-styles';
import { programTexts } from '../../utils/constants';

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
            <AsideText>{programTexts[program]}</AsideText>
          <AsideText big>Параметры</AsideText>
          <AsideText>Сумма займа - {moneyAmount} руб.</AsideText>
          <AsideText>Срок займа - {monthsAmount} мес.</AsideText>
          <AsideText big>Выбранная стратегия</AsideText>
          <AsideText>Первоначальный взнос - {initialPayment} руб.</AsideText>
          <AsideText>Ежемесячный взнос - {monthlyPayment} руб.</AsideText>
        </Aside>
        <Form onSubmit={this.handleSubmit}>
          <SubFormWrapper>
            <PaymentsSubForm
              minAmount="0"
              maxAmount="100000"
              value={initialPayment}
              handleChange={this.handleChange}
              type="initialPayment">
              Первоначальный взнос
            </PaymentsSubForm>
          </SubFormWrapper>
          <SubFormWrapper>
            <PaymentsSubForm
              minAmount="1"
              maxAmount="10000"
              value={monthlyPayment}
              handleChange={this.handleChange}
              color={colors.orange}
              type="monthlyPayment">
              Ежемесячный взнос
            </PaymentsSubForm>
          </SubFormWrapper>
          <Button onClick={setupAppScreen(1)}>Перерасчёт</Button>
          <Button type="submit" primary>Рассчитать</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default PaymentsScreen;