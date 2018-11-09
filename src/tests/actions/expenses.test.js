import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, startEditExpense, editExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'testuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expenseData = {}
        expenses.forEach(({ id, description, note, amount, createdAt }) => {
            expenseData[id] = { description, note, amount, createdAt }
        })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done())
})

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

test('should edit expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = {
        description: 'EDIT Mouse',
        amount: 4000,
        createdAt: 4000,
        note: 'EDIT This one is better',
}
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: id,
            updates: {
                ...updates
            }
        })
            return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(updates)
        done()
    })
})

test('should add expense action object', () => {
    const action = addExpense(expenses[2])
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        createdAt: 1000,
        note: 'This one is better',
}
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
}
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})


test('should setup SET EXPENSE action objectwith data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
  });

  test('should remove expense from database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        })
            return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})