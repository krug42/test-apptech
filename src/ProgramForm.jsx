import React, { Component, Fragment } from 'react';

class ProgramForm extends Component {
  
  state = {
    programValue: 'auto',
    moneyAmountValue: 0,
    monthsAmountValue: 6,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setupAppState({ 
      program: this.state.programValue,
      moneyAmount: this.state.moneyAmountValue,
      monthsAmount: this.state.monthsAmountValue,
      openedScreenIndex: 2
     });
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case 'program':
        this.setState({ programValue: e.target.value });
        break;
      case 'money':
        this.setState({ moneyAmountValue: e.target.value });
        break;
      case 'months':
        this.setState({ monthsAmountValue: e.target.value });
        break;
    }
  }
  
  render() {
    const { programValue, moneyAmountValue, monthsAmountValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <select name="program" value={programValue} onChange={this.handleChange}>
          <option value="auto">авто</option>
          <option value="realty">недвижимость</option>
        </select>
        <input type="number" name='money' value={moneyAmountValue} onChange={this.handleChange} min="0"/>
        <input 
          type="number" 
          name='months' 
          value={monthsAmountValue} 
          onChange={this.handleChange} 
          min="6" 
          max={(programValue === 'auto') ? 60 : 120}/>
        <button type="submit">Далее</button>
      </form>
    );
  }
}

export default ProgramForm;