import React, { Component } from 'react';
import { Form, Input, Select } from './styled';
import BaseButton from '../../base-components/BaseButton';

class ProgramForm extends Component {
  state = {
    programValue: '',
    moneyAmountValue: '',
    monthsAmountValue: '',
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
      default:
        return;
    }
  }
  
  render() {
    const { programValue, moneyAmountValue, monthsAmountValue } = this.state;
    const disabledButton = programValue && moneyAmountValue && monthsAmountValue;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Select name="program" value={programValue} onChange={this.handleChange} required>
          <option value="" hidden>Программа</option>
          <option value="auto">Автомобиль</option>
          <option value="realty">Недвижимость</option>
        </Select>
        <Input 
          type="number" 
          name="money"
          placeholder="Сумма займа, руб."
          value={moneyAmountValue} 
          onChange={this.handleChange} 
          min="0"
          required/>
        <Input 
          type="number" 
          name="months"
          placeholder="Срок займа, мес."
          value={monthsAmountValue} 
          onChange={this.handleChange} 
          min="6" 
          max={(programValue === 'auto') ? 60 : 120}
          required/>
        <BaseButton type="submit" primary disabled={!disabledButton}>Далее</BaseButton>
      </Form>
    );
  }
}

export default ProgramForm;