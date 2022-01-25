import React, { Component } from 'react';
import json from '../../products.json';
import './styles.css';
import Product from '../Product';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tagsOn: [],
    }
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter(event) {
    const ingredient = event.target.value;
    let tagsOn = this.state.tagsOn;
    if (tagsOn.includes(ingredient)) {
      tagsOn = tagsOn.filter(filter => filter !== ingredient);  
      event.target.classList.remove("pushed");
    } else {
      tagsOn.push(ingredient);    
      event.target.classList.add("pushed");
    }
    this.setState({ tagsOn });
  }

  filterProducts(product) {
    const tagsOn = this.state.tagsOn;
    if (!tagsOn.length || product.tags.some(tag => tag.includes(tagsOn))) {
      return <Product key={product.id} product={product}/>
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="list-container">
        <div className="filter-container">
          Select Filter {json.ingredients.map(
            (filter, index) => (
              <button key={`filter-${index}`} onClick={this.toggleFilter} value={filter} className="filter-btn">
                {filter}
              </button>)
          )}
        </div>
        <div className="products">
              {json.products.filter(product => !this.state.tagsOn.length || product.tags.some(tag => this.state.tagsOn.includes(tag)))
                .map(product => <Product key={`${product.name}-${product.id}`} product={product}/>)
              }
        </div>
      </div>);
  }
}