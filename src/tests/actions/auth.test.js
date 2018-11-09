import { login, logout } from '../../actions/auth'

test('Setup Login action object', () => {
    const  action = login('abc123')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    })
})

test('setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})