import expenses from '../fixtures/expenses'
import { getExpensesTotal } from '../../selectors/expense-total'

const expenses2 = [expenses[1]]

test('return zero for no expenses', () => {
    const expenses2 = []
    const result = getExpensesTotal(expenses2)
    expect(result).toEqual(0)
})

test('return total of all expenses', () => {
    const result = getExpensesTotal(expenses)
    expect(result).toEqual(114195)
})

test('return expenses index 1 total', () => {
    const result = getExpensesTotal(expenses2)
    expect(result).toEqual(109500)
})