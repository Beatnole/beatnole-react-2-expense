export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const setSortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT'
})

export const setSortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
})

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})