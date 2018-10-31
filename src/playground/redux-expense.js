import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
//expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE': 
            return state.filter(({id} ) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default: 
            return state
    }
}
// filters reducer
const filterReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined}

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const setSortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT'
})

const setSortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
            return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }  else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpeneses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpeneses)
})  

const  expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000}))
const  expensetwo = store.dispatch(addExpense({ description: 'Coffee', amount: 1000, createdAt: 1000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expensetwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(setSortByAmount())
// store.dispatch(setSortByDate())

 // store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

//store.dispatch(setTextFilter('CO'))


const demoState = {
    expenses: [{
        id: 'etertet345tt',
        description: 'Jan Rent',
        note: 'final payment note',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

