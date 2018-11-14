
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
               uid: action.uid,
               name: action.name,
               email: action.email,
               url: action.url 
            }
        case 'LOGOUT':
            return {}
        default: 
            return state
    }
}