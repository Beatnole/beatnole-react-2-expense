import { createStore } from 'redux'

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy:  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({set} = {}) => ({
    type: 'SET',
    count: set
    
})

const resetCount = () => ({
    type: 'RESET'
})

//Reducer are pure functions

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy 
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
        }
        default:
        return state
    }
}

const store = createStore(countReducer)

const unsubscibe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({set: 14}))

store.dispatch(resetCount())
