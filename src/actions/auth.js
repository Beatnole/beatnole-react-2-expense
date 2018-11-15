import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid, name, email, url) => ({
    type: 'LOGIN',
    uid,
    name: name,
    email: email,
    url: url
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startSignOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}
