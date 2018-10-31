import selectExpenses from '../../selectors/expenses'
import filters from '../../reducers/filters';

const expenses = [
    { id: '1', description: 'Gum', amount: 195, note: 'test note', createdAt: 0 },
    { id: '2', description: 'Rent', amount: 109500, note: 'test note', createdAt: -1000 },
    { id: '3', description: 'Credit Card', amount: 4500, note: 'test note', createdAt: 1000 }]

test('Filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual( [expenses[2], expenses[1]] )
})