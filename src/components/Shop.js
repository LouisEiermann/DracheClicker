import React from 'react';
import { connect } from 'react-redux';
import '../static/css/shop.css';
import frosch from '../static/img/frosch.jpg';
import monster from '../static/img/monster.jpg';
import ofenkaese from '../static/img/ofenkäse.jpg';
import honig from '../static/img/honig.jpg';
import lkw from '../static/img/lkw.jpg';
import pizzaschieber from '../static/img/pizzaschieber.jpg';
import { addItem } from '../actions'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.froschItem = React.createRef();
    this.pizzaschieberItem = React.createRef();
    this.monsterItem = React.createRef();
    this.honigItem = React.createRef();
    this.ofenkaeseItem = React.createRef();
    this.lkwItem = React.createRef();
  }

  // Check if upgrades need to be mounted or unmounted after purchase
  componentDidUpdate() {

    // Check if upgrades need to be mounted
    var haider = this.props.haider;

    if (haider > 0) {
      this.froschItem.current.style.display = "table-row";
    }

    if (haider > 100) {
      this.pizzaschieberItem.current.style.display = "table-row";
    }

    if (haider > 100) {
      this.monsterItem.current.style.display = "table-row";
    }

    if (haider > 100) {
      this.honigItem.current.style.display = "table-row";
    }

    if (haider > 100) {
      this.ofenkaeseItem.current.style.display = "table-row";
    }

    if (haider > 100) {
      this.lkwItem.current.style.display = "table-row";
    }

    // Check if upgrades need to be unmounted
    if (this.props.pfadPower > 1) {
      this.froschItem.current.style.display = "none";
    }
  }

  render() {
    return (
      <div className="shop">
        <h1>Shop</h1>
        <p>Kaufe Upgrades, um Mettproduzenten effizienter zu machen!</p>
        <div className="items">
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', price: 10, haider: this.props.haider}))}} ref={this.froschItem} className="item" hidden>
            <img src={frosch} alt={"ein frosch"}/>
            <hr/>
            <h1>a Frosch</h1>
            <p>10 Haider</p>
            <p>Hahahaha, a Frosch!</p>
            <hr/>
            <p>Drachenpfad produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', price: 10, haider: this.props.haider}))}} ref={this.pizzaschieberItem} className="item" hidden>
            <img src={pizzaschieber} alt={"ein pizzaschieber"}/>
            <hr/>
            <h1>Ein Pizzaschieber</h1>
            <p>Geeignet für Haider-Kaschper</p>
            <hr/>
            <p>Rotes Herz produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', price: 10, haider: this.props.haider}))}} ref={this.monsterItem} className="item" hidden>
            <img src={monster} alt={"ein energy-drink"}/>
            <hr/>
            <h1>Enerdschi</h1>
            <p>Das beste beim Streamen</p>
            <hr/>
            <p>Rewe produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', price: 10, haider: this.props.haider}))}} ref={this.honigItem} className="item" hidden>
            <img src={honig} alt={"ein glas honig"}/>
            <hr/>
            <h1>Breitsamer Honig</h1>
            <p>Der "helle Harte", erhöht vielleicht den IQ des Konsumenten</p>
            <hr/>
            <p>Rewe produziert dreimal so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', price: 10, haider: this.props.haider}))}} ref={this.ofenkaeseItem} className="item" hidden>
            <img src={ofenkaese} alt={"ein industrieprodukt"}/>
            <hr/>
            <h1>Ofenkäse</h1>
            <p>Gesund für Oger</p>
            <hr/>
            <p>Rewe produziert viermal so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', price: 10, haider: this.props.haider}))}} ref={this.lkwItem} className="item" hidden>
            <img src={lkw} alt={"ein lastkraftwagen"}/>
            <hr/>
            <h1>gelibter LKW</h1>
            <p>Vom Besitzer sehr gelibt</p>
            <hr/>
            <p>Rudis Grab produziert doppelt so viele Haider pro Level</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    haider: state.haider,
    pfadPower: state.pfadPower,
    herzPower: state.herzPower,
    rewePower: state.rewePower,
    burgPower: state.burgPower,
    schanzePower: state.schanzePower,
    grabPower: state.grabPower
  }
}

export default connect(mapStateToProps)(Shop);
