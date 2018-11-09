import { shallow } from 'enzyme'
import React from 'react'
import { Login } from '../../components/Login'

test('login page snapshot test', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
})

test('should call start login', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<Login startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})