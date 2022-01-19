import React, { Component } from 'react';
import {fetchMessages} from './AjaxLibrary';

class UserDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            messages: [],
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const messages = await fetchMessages(this.props.userId);
        this.setState({ messages, isLoading: false });
    }

    renderMessage = (message, index) => (<p key={`msg-${index}`}>{message}</p>)

    // renderMessages(){
    //     const messages = this.state.messages;
    //     if (messages.length){
    //         return ({messages.map(renderMessage )})
    //     } else {
    //         return "You don't have any messages."
    //     }
    // }

    render() {
        if (this.state.isLoading) {
            return "Wait, I'am looking for your messages"
        } else {
            return (<div className="user-messages">{this.state.messages && this.state.messages.length ? this.state.messages.map(this.renderMessage) : "You don't have any messages."}</div>);
        }
    }
}

export default UserDisplay;