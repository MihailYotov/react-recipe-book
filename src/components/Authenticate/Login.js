import React, {Component, Fragment} from 'react';
import classes from './Authenticate.module.css'
import axios from '../../axios-base';
import AuthContext from '../../context/authContext';

class Login extends Component {
    state = {
        email: null,
        password: null,
        returnSecureToken: true
    };

    static contextType = AuthContext;

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    submit = (event) => {
        event && event.preventDefault();

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCilwINVSfpZ9fq3QDc-99665p4JKGq_1s', this.state)
            .then((response) => {
                const expiationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

                this.context.actions.updateUserData({
                    token: response.data.idToken,
                    userId: response.data.localId,
                    expiationDate: expiationDate,
                });

                this.props.history.push('/recipes');
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {
        return (
            <Fragment>
                <h1>Login</h1>

                <form onSubmit={this.submit} className={classes.AuthFrom}>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id={'email'} onChange={this.changeHandler}/>
                    {/*TODO: Password field*/}
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id={'password'} onChange={this.changeHandler}/>

                    <button type={"submit"} className={classes.FormButton}>Login</button>
                </form>
            </Fragment>
        );
    }
}

export default Login;
