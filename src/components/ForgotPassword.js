import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase/firebase'
import { history } from '../routers/AppRouter'

const PasswordForgetPage = () =>
    <div className="box-layout">
        <div className="box-layout__box">  
            <div className="form">
                <h1>Password Forget</h1>
                <PasswordForgetForm />
            </div>
        </div>
    </div>
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push('/email')
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          autoFocus
          className="text-input"
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} className={isInvalid ? "button" : "button button-password-reset"} type="submit">
          Send Reset Email
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};