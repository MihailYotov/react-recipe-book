import React, {Component, Fragment} from 'react';
import axios from '../../axios-base';
import AuthContext from '../../context/authContext';
import AuthForm from "./AuthForm";

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

    submit = (data) => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCilwINVSfpZ9fq3QDc-99665p4JKGq_1s', data)
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

                <AuthForm
                    props={this.props}
                    changeHandler={this.changeHandler}
                    submit={this.submit}
                />
            </Fragment>
        );
    }
}

export default Login;
