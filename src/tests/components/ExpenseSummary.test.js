import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseSummary
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('ExpenseSummary Display with 3 expenses', () => {
    expect(wrapper).toMatchSnapshot();
  });

