import React from 'react';
import Aside, { AsideText } from '../../base-components/Aside';
import { 
  Wrapper, 
  ContentWrapper, 
  CenteredText, 
  Circle, 
  Num, 
  Sign, 
  Ul, 
  ButtonWrapper,
  Button } from './styled';

function FinalScreen (props) {
  const { 
    program,
    moneyAmount,
    monthsAmount,
    initialPayment,
    monthlyPayment,
    setupAppScreen } = props;
  const result = 120 / (((Number(initialPayment) + 6 * Number(monthlyPayment)) * 10000) / (Number(moneyAmount) * Number(monthsAmount)));
  
  return (
    <Wrapper>
      <Aside>
        <AsideText big>Выбранная программа</AsideText>
        {(program === 'auto') ? 
          <AsideText>Новая программа по автомобилю</AsideText> :
          <AsideText>Новая программа по недвижимости</AsideText>}
        <AsideText big>Параметры</AsideText>
        <AsideText>Сумма займа - {moneyAmount} р.</AsideText>
        <AsideText>Срок займа - {monthsAmount} мес.</AsideText>
        <AsideText big>Выбранная стратегия</AsideText>
        <AsideText>Первоначальный взнос - {initialPayment} р.</AsideText>
        <AsideText>Ежемесячный взнос - {monthlyPayment} р.</AsideText>
        <AsideText big>Расходы заёмщика</AsideText>
        <AsideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec tristique magna a urna tincidunt, varius vestibulum lorem fringilla. 
        </AsideText>
        <AsideText>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Mauris ornare, turpis ut varius porta, lorem ipsum scelerisque metus, quis tempor magna risus eget elit. 
        </AsideText>
      </Aside>
      <ContentWrapper>
        <CenteredText>
          Примерное время ожидания составит:
        </CenteredText>
        <Circle>
          <Num>{Math.ceil(result)}</Num>
          <Sign>месяцев</Sign>
        </Circle>
        <CenteredText>
          Рекомендации для уменьшения срока ожидания
        </CenteredText>
          <Ul>
            <li>Уменьшите сумма и срок займа;</li>
            <li>Увеличьте первоначальный и ежемесячный взносы;</li>
            <li>Учавствуйте в специальных акциях для Пайщиков.</li>
          </Ul>
        <ButtonWrapper>
          <Button onClick={setupAppScreen(1)}>Перерасчет</Button>
          <Button important>Сохранить в PDF</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default FinalScreen;