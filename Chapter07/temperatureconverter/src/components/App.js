import React, { Component } from 'react';
import ConvertForm from './ConvertForm';
import { StatusProvider } from './StatusContext';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const defaultCelsius = 20;

    this.state = {
      celsius: defaultCelsius,
      fahrenheit: this.getFahrenheit(defaultCelsius)
    }
  }

  getFahrenheit = celsius => parseInt((celsius * 9) / 5 + 32);

  getCelsius = fahrenheit => parseInt(((fahrenheit - 32) * 5) / 9);

  convertTemperature = (convertTo, value) => convertTo === "celsius"
    ? { celsius: this.getFahrenheit(value), fahrenheit: parseInt(value) }
    : { celsius: parseInt(value), fahrenheit: this.getFahrenheit(value) }


  updateTemperature(convertTo, value = 0) {
    this.setState(() => {
      if (['', '-'].includes(value)) {
        return {
          celsius: value,
          fahrenheit: value
        };
      }
      return this.convertTemperature(...arguments);
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Temperature Converter</h1>
        <StatusProvider value={this.state.celsius}>
          <ConvertForm
            temperature={this.state}
            updateTemperature={this.updateTemperature.bind(this)}
          />
        </StatusProvider>
      </div>
    );
  }
}

export default App;
