import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import { shallow } from 'enzyme'


test('ExpenseDashboard Display with 3 expenses', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
} )
