import React from 'react';
import { ExpensesSummary } from '../../components/ExpenseSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { filters, altFilters } from '../fixtures/filters';


test('ExpenseSummary Display with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={5013} />)
    
    expect(wrapper).toMatchSnapshot();
  });

  test('ExpenseSummary Display with 23 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={124525013} />)
    
    expect(wrapper).toMatchSnapshot();  
});


