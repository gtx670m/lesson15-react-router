import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
  render() {
    let products = [
      {
        id: 1,
        slug: 'iphone',
        name: "iphone X",
        price: 21000000
      },
      {
        id: 2,
        slug: 'nokia',
        name: "nokia 6 plus",
        price: 7000000
      },
      {
        id: 3,
        slug: 'poco',
        name: "pocophone f1",
        price: 8000000
      }
    ];
    const showProducts = (products) => {
      let result = null;
      const { url } = this.props.match;
      if (products.length > 0) {
        result = products.map((product, index) => {
          return (
            <NavLink key={index} className="list-group-item" to={`${url}/${product.slug}`} exact={true}>{product.id} - {product.name} - {product.price}</NavLink>
          );
        });
      }
      return result;
    };
    return (
      <div className="container">
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          <ul className="list-group">
            {showProducts(products)}
          </ul>
        </div>
        <div className="row">
          <Route path="/products/:name" component={Product} />
        </div>
      </div >
    );
  }
}

export default Products;
