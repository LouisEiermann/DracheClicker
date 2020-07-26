import React from 'react';
import '../static/css/shop.css';

class Shop extends React.Component {
  render() {
    return (
      <div className="shop">
        <h1>Shop</h1>
        <p>Kaufe Upgrades, um Mettproduzenten effizienter zu machen!</p>
        <div className="items">
        </div>
      </div>
    );
  }
}

export default Shop;
