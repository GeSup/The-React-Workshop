import React, { Component } from 'react';
import {fetchUserCount} from './AjaxLibrary';

class UserCountDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userCount: 0,
            isLoading: false
        }
    }

    async componentDidMount(){
        this.setState({isLoading: true});
        const userCount = await fetchUserCount()
        this.setState({userCount, isLoading: false})
    }

    render() {
        return (<div className="user-count">Users in the app: {this.state.isLoading ? 'Wait, now loading' : this.state.userCount}</div>)
    }
}

export default UserCountDisplay;