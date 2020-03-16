import React, {Component} from 'react';
import AuthContext from "./authContext";

class AuthContextProvider extends Component {
    state = {
        user: {}
    };

    actions = {
        updateUserData: (user) => {
            this.setState({user: user});

            localStorage.setItem('token', user.token);
            localStorage.setItem('expiationDate', user.expiationDate);
            localStorage.setItem('userId', user.userId);
        },

        logout: () => {
            this.setState({user:{}});

            localStorage.removeItem('token');
            localStorage.removeItem('expiationDate');
            localStorage.removeItem('userId');
        },
    };

    componentDidMount() {
        if (localStorage.getItem('userId')) {
            if (localStorage.getItem('expiationDate') <= new Date()) {
                this.actions.logout()
            } else {
                this.setState({
                    user: {
                        token: localStorage.getItem('token'),
                        expiationDate: localStorage.getItem('expiationDate'),
                        userId: localStorage.getItem('userId'),
                    }
                })
            }
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{user: this.state.user, actions: this.actions}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;
