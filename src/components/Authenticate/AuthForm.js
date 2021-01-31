import React, {Component, Fragment} from 'react';
import classes from "./Authenticate.module.css";

class AuthForm extends Component {
    state = {
        formData: {},
    };

    changeHandler = (event) => {
        if (event.target && event.target.name) {
            const name = event.target.name;
            const value = event.target.value
            const validation = JSON.parse(event.target.dataset.validation);

            const hasErrors = validation.map((validItem) => {
                return this.validateFields(validItem, value)
            }).includes(false);

            const data = {
                [name]: {
                    value: value,
                    hasErrors: hasErrors
                },
            }

            this.setState((prevState) => ({
                formData: {
                    ...prevState.formData,
                    ...data
                },
            }));
        }
    };

    validateFields = (name, value) => {
        switch (name){
            case 'required':
                return !!value
            case 'email':
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            case 'password':
                if (this.state.formData.confirmPassword) {
                    this.setState((prevState) => ({
                        formData: {
                            ...prevState.formData,
                            ...{confirmPassword: {
                                    hasErrors: this.validateFields('confirmPassword', value),
                                }}
                        },
                    }));
                }

                return /((?=.*\d)(?=.*[A-Z]).{8,})/.test(value)
            case 'confirmPassword':
                return value === (this.state.formData.password && this.state.formData.password.value)
            default:
                return false
        }
    }

    submit = (event) => {
        event && event.preventDefault();
        //TODO: Too much data conversion.
        // Extract the errors in own object and collect the data in format suitable for submitting.

        let data = {}
        Object.keys(this.state.formData).forEach((key) => {
            data[key] = this.state.formData[key].value
        })

        this.props.submit({...{returnSecureToken: true},...data})
    }

    componentDidMount() {
        this.setState({inputsCount: document.getElementsByTagName('input').length})
    }


    render() {
        let disable;
        //TODO: Too much data conversion. Create better validation when extract errors in own object

        if (Object.keys(this.state.formData).length < this.state.inputsCount) {
            disable = true
        } else {
            Object.keys(this.state.formData).forEach((key) => {
                if (this.state.formData[key].hasErrors) {
                    disable = true;
                }
            })
        }

        return (
            <form onSubmit={this.submit} className={classes.AuthFrom}>
                <label htmlFor="email">Email: </label>
                <input type="text"
                       name="email"
                       id={'email'}
                       onChange={this.changeHandler}
                       data-validation='["required", "email"]'/>
                {this.state.formData.email && this.state.formData.email.hasErrors &&
                <div className={classes.Error}>Invalid E-mail!</div>
                }

                <label htmlFor="password">Password: </label>
                <input type="password"
                       name="password"
                       id={'password'}
                       onChange={this.changeHandler}
                       data-validation={this.props.register ? '["required", "password"]' : '["required"]'}/>
                {this.state.formData.password && this.state.formData.password.hasErrors &&
                <div className={classes.Error}>Password must contain at least 8 characters among which capital letters and numbers!</div>
                }

                {this.props.register &&
                <Fragment>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        type="password"
                           name="confirmPassword"
                           id={'confirmPassword'}
                           onChange={this.changeHandler}
                           data-validation='["required", "confirmPassword"]'
                    />
                    {this.state.formData.confirmPassword && this.state.formData.confirmPassword.hasErrors &&
                    <div className={classes.Error}>The password confirmation does not match!</div>
                    }
                </Fragment>
                }

                <button type={"submit"}
                        className={classes.FormButton}
                        disabled={disable}
                >
                    {this.props.register ? 'Register': 'Login'}</button>
            </form>
        );
    }
}

export default AuthForm;
