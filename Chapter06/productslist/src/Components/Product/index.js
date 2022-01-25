import React, { Component } from 'react';
import './styles.css';

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            extended: false,
        }
        this.toggleSummary = this.toggleSummary.bind(this);
    }

    toggleSummary(){
        this.setState({ extended: !this.state.extended})
    }

    render() {   
        const {name, price, summary} = this.props.product;       
        return (
            <div className="product">
                <button className="plus" onClick={this.toggleSummary}>{this.state.extended ? "-" : "+"}</button>
                <h3>{name}</h3>
                <strong>${price}</strong>
                {this.state.extended && <p>{summary}</p>}
            </div>
        );
    }
}