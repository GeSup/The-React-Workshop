import React, { Component } from 'react';
import './App.css';

const Header = props => <h2>{props.title}</h2>;
const InventoryItem = props => <div>{props.itemName}<hr/>{props.itemPrice}</div>;
class App extends Component{

  constructor(props) {
    super(props);
    this.title = "BuyStuff";
    this.state = {
      items:[ {
        itemName: "Shoe",
        itemPrice: 5
      }, {
        itemName: "Sock",
        itemPrice: 3
      }]
    }
  }



  render() {
    return (
      <div className="app">
      <Header title={this.title}/>
      <InventoryItem itemName={this.state.items[0].itemName} itemPrice={this.state.items[0].itemPrice}/>
      <InventoryItem itemName={this.state.items[1].itemName} itemPrice={this.state.items[1].itemPrice}/>
    </div>);
  }
}

export default App;
