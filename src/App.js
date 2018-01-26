import React, { Component, Fragment } from 'react';
import List from './List';
import ProgramScreen from'./ProgramScreen';
import PaymentsScreen from './PaymentsScreen';
import FinalScreen from './FinalScreen';

class App extends Component {
  
  state = {
    openedScreenIndex: 1,
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
      <Fragment>
        <ul>
          <li>
            <button onClick={this.handleClick(1)}>screen 1</button>
          </li>
          <li>
            <button onClick={this.handleClick(2)}>screen 2</button>
          </li>
          <li>
            <button onClick={this.handleClick(3)}>screen 2</button>
          </li>
        </ul>
        {
          (index === 1) ? <ProgramScreen handleSumbit={this.handleForms}/> :
          (index === 2) ? <PaymentsScreen program={program} moneyAmount={moneyAmount} monthsAmount={monthsAmount} setupAppState={this.handleForms}/> :
          <FinalScreen 
            program={program} 
            moneyAmount={moneyAmount} 
            monthsAmount={monthsAmount} 
            initialPayment={initialPayment}
            monthlyPayment={monthlyPayment}
            setupAppState={this.handleForms}/>
        }
      </ Fragment>
      );
  }
}

export default App;
