import { setStartDate, setEndDate, setTextFilter, setSortByAmount, setSortByDate } from '../../actions/filters'
import moment from 'moment'

test('Setup setStartDate filter object', () => {
    const  action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('Setup setEndDate filter object', () => {
    const  action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
test('Setup SET_TEXT_FILTER object clears', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('Setup SET_TEXT_FILTER object', () => {
    const text = 'TEST'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})
test('Setup SET_SORT_BY_AMOUNT object', () => {
    const action = setSortByAmount()
    expect(action).toEqual({
        type: 'SET_SORT_BY_AMOUNT'
    })
})
test('Setup SET_SORT_BY_DATE object', () => {
    const action = setSortByDate()
    expect(action).toEqual({
        type: 'SET_SORT_BY_DATE'
    })
})

