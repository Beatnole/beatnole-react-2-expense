import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history} 
        expense={expenses[1]}
        />)
})

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('test should handle onsubmit Edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('test should handle onclick Remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id })
})