import React from 'react'
import { AddExpensePage } from '../../components/AddExpensePage'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('should render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('test should handle onsubmite', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})