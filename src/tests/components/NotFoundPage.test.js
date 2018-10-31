import React from 'react';
import NotFoundPage from '../../components/NotFoundPage'
import { shallow } from 'enzyme'

test('display Not Found Page', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})