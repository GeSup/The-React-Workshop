import React, { Component } from 'react';
import { fetchUser } from './AjaxLibrary';
import UserDisplay from './UserDisplay';

class LoginDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: "",
            user: null,
            loggedIn: false
        }
        this.setUsername = this.setUsername.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.logOutUser = this.logOutUser.bind(this);
    }

    setUsername(event) {
        const username = event.target.value;
        this.setState({ username })
    }

    async loginUser() {
        this.setState({ isLoading: true });
        const user = await fetchUser(this.state.username);
        this.setState({ user, isLoading: false, loggedIn: true });
    }

    renderLogin() {
        if (this.state.isLoading) {
            return "Hold on, I'm authorizing your account";
        } else {
            return (
                <div className="login">
                    Login Username: <input type="text" onChange={this.setUsername} />
                    <button onClick={this.loginUser}>Login</button>
                </div>
            )
        }
    }

    logOutUser() {
        this.setState({ user: null, loggedIn: false });
    }

    renderUserLogged() {
        return (
            <div className="user-panel">
                You are logged as {this.state.username}
                <button onClick={this.logOutUser}>Logout</button>
                <hr />
                <UserDisplay userId={this.state.user && this.state.user.id} />
            </div>
        )
    }

    render() {
        return (<div className="user">
            {this.state.loggedIn ? this.renderUserLogged() : this.renderLogin()}
        </div>);
    }

}

export default LoginDisplay;