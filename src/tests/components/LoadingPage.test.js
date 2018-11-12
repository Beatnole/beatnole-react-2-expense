import { shallow } from 'enzyme'
import React from 'react'
import LoadingPage from '../../components/LoadingPage'

test('loading page snapshot test', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})
