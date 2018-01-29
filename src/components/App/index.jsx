import React, { Component } from 'react';
import ProgramScreen from'../ProgramScreen';
import PaymentsScreen from '../PaymentsScreen';
import FinalScreen from '../FinalScreen';
import { Wrapper, Navbar, Item, NavText, NavHeader } from './styled';

class App extends Component {
  state = {
    openedScreenIndex: 2,
    program: '',
    moneyAmount: 0,
    monthsAmount: 0,
    initialPayment: 0,
    monthlyPayment: 0
  }

  handleClick = (index) => (e) => {
    e.preventDefault();
    this.setState({ openedScreenIndex: index });
    window.scrollTo(0, 0);
  }

  handleForms = (obj) => {
    this.setState({
      ...obj
    });
    window.scrollTo(0, 0);
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
            <Item active={index === 1} count="1">
              <NavHeader>Программа</NavHeader>
              <NavText>выбор параметров</NavText>
            </Item>
          </li>
          <li>
            <Item active={index === 2} count="2">
              <NavHeader>Стратегия</NavHeader>
              <NavText>взносы по программе</NavText></Item>
          </li>
          <li>
            <Item active={index === 3} count="3">
              <NavHeader>Игог</NavHeader>
              <NavText>расчёт ожидания</NavText></Item>
          </li>
        </Navbar>
        {
          (index === 1) ? 
          <ProgramScreen 
            setupAppState={this.handleForms}/> :
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
