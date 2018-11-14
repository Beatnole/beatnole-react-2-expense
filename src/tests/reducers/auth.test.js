import auth from '../../reducers/auth'

test('should logout and clear uid', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = auth(undefined, action);
    expect(state).toEqual({});
  });

test('should login and set uid', () => {
const action = {
    type: 'LOGIN',
    uid: 'abc12345',
    name: 'name',
    email: 'email@beatnole.com',
    url: 'https://whoisthis.com'
    };
    const state = auth({}, action);
    expect(state).toEqual({
        uid: 'abc12345',
        name: 'name',
        email: 'email@beatnole.com',
        url: 'https://whoisthis.com'
    });
});