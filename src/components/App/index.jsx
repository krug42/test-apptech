import React, { Component } from 'react';
import ProgramScreen from'../ProgramScreen';
import PaymentsScreen from '../PaymentsScreen';
import FinalScreen from '../FinalScreen';
import { Wrapper, Navbar, Item, Text } from './styled';

class App extends Component {
  state = {
    openedScreenIndex: 3,
    program: '',
    moneyAmount: 0,
    monthsAmount: 0,
    initialPayment: 0,
    monthlyPayment: 0
  }

  handleClick = (index) => (e) => {
    e.preventDefault();
    this.setState({ openedScreenIndex: index });
  }

  handleForms = (obj) => {
    this.setState({
      ...obj
    });
  }

  render() {
    const { 
      openedScreenIndex: index,
      program,
      moneyAmount,
      monthsAmount,
      initialPayment,
      monthlyPayment } = this.state;

    return (
      <Wrapper>
        <Navbar>
          <li>
            <Item onClick={this.handleClick(1)} active={index === 1} count="1">
              <Text primary>Программа</Text>
              <Text>выбор параметров</Text>
            </Item>
          </li>
          <li>
            <Item onClick={this.handleClick(2)} active={index === 2} count="2">
              <Text primary>Стратегия</Text>
              <Text>взносы по программе</Text></Item>
          </li>
          <li>
            <Item onClick={this.handleClick(3)} active={index === 3} count="3">
              <Text primary>Игог</Text>
              <Text>расчёт ожидания</Text></Item>
          </li>
        </Navbar>
        {
          (index === 1) ? <ProgramScreen setupAppState={this.handleForms}/> :
          (index === 2) ? 
          <PaymentsScreen 
            program={program} 
            moneyAmount={moneyAmount} 
            monthsAmount={monthsAmount} 
            setupAppState={this.handleForms}
            setupAppScreen={this.handleClick}/> :
          <FinalScreen 
            program={program} 
            moneyAmount={moneyAmount} 
            monthsAmount={monthsAmount} 
            monthlyPayment={monthlyPayment}
            initialPayment={initialPayment}
            setupAppState={monthlyPayment}
            setupAppScreen={this.handleClick}/>
        }
      </ Wrapper>
      );
  }
}

export default App;
