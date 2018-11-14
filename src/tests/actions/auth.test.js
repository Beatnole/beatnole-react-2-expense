import { login, logout } from '../../actions/auth'

test('Setup Login action object', () => {
    const  action = login('abc123','name', 'email@beatnole.com', 'https://whoisthis.com')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123',
        name: 'name',
        email: 'email@beatnole.com',
        url: 'https://whoisthis.com'
    })
})

test('setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})