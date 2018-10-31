import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Setup remove expense action object', () => {
    const  action = removeExpense({ id: '124abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '124abc'
    })
})

test('setup edit expense action object', () => {
    const action = editExpense('abc123', { note: 'I wish this worked' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {note: 'I wish this worked'}
    })
} )

test('should add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 29999,
        createdAt: 1000,
        note: 'this is my note'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should add expense action object with defaults', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
})