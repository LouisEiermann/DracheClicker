import React from 'react';
import { connect } from 'react-redux';
import '../static/css/shop.css';
import frosch from '../static/img/frosch.jpg';
import monster from '../static/img/monster.jpg';
import ofenkaese from '../static/img/ofenkäse.jpg';
import honig from '../static/img/honig.jpg';
import loeschzwerg from '../static/img/loeschzwerg.jpg';
import lkw from '../static/img/lkw.jpg';
import pizzaschieber from '../static/img/pizzaschieber.jpg';
import pizza from '../static/img/pizza.jpg';
import luger from '../static/img/luger.jpg';
import { addItem } from '../actions'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.froschItem = React.createRef();
    this.pizzaschieberItem = React.createRef();
    this.pizzaItem = React.createRef();
    this.monsterItem = React.createRef();
    this.honigItem = React.createRef();
    this.ofenkaeseItem = React.createRef();
    this.loeschzwergItem = React.createRef();
    this.lkwItem = React.createRef();
    this.lugerItem = React.createRef();
  }

  // Check if upgrades need to be mounted or unmounted after purchase
  componentDidUpdate() {

    // Check if upgrades need to be mounted or unmounted

    // Drachenpfad
    if (this.props.pfadLevel >= 5 && this.props.pfadPower === 1) {
      this.froschItem.current.style.display = "table-row";
    } else {
      this.froschItem.current.style.display = "none";
    }


    // Rotes Herz
    if (this.props.herzLevel >= 5 && this.props.herzPower === 1) {
      this.pizzaschieberItem.current.style.display = "table-row";
    } else {
      this.pizzaschieberItem.current.style.display = "none";
    }

    if (this.props.herzLevel >= 50 && this.props.herzPower === 2) {
      this.pizzaItem.current.style.display = "table-row";
    } else {
      this.pizzaItem.current.style.display = "none";
    }


    // Rewe
    if (this.props.reweLevel >= 5 && this.props.rewePower === 1) {
      this.monsterItem.current.style.display = "table-row";
    } else {
      this.monsterItem.current.style.display = "none";
    }

    if (this.props.reweLevel >= 50 && this.props.rewePower === 2) {
      this.honigItem.current.style.display = "table-row";
    } else {
      this.honigItem.current.style.display = "none";
    }

    if (this.props.reweLevel >= 500 && this.props.rewePower === 3) {
      this.ofenkaeseItem.current.style.display = "table-row";
    } else {
      this.ofenkaeseItem.current.style.display = "none";
    }

    if (this.props.reweLevel >= 5000 && this.props.rewePower === 4) {
      this.loeschzwergItem.current.style.display = "table-row";
    } else {
      this.loeschzwergItem.current.style.display = "none";
    }


    // Rudis Grab
    if (this.props.grabLevel >= 5 && this.props.grabPower === 1) {
      this.lkwItem.current.style.display = "table-row";
    } else {
      this.lkwItem.current.style.display = "none";
    }

    if (this.props.grabLevel >= 50 && this.props.grabPower === 2) {
      this.lugerItem.current.style.display = "table-row";
    } else {
      this.lugerItem.current.style.display = "none";
    }
  }

  render() {
    return (
      <div className="shop">
        <h1>Shop</h1>
        <p>Kaufe Upgrades, um Mettproduzenten effizienter zu machen!</p>
        <div className="items">
          <div onClick={() => {this.props.dispatch(addItem({type: 'pfad', power: 1, price: 5000, haider: this.props.haider}))}} ref={this.froschItem} className="item" hidden>
            <img src={frosch} alt={"ein frosch"}/>
            <hr/>
            <h1>a Frosch</h1>
            <p>5.000 Haider</p>
            <p>Hahahaha, a Frosch!</p>
            <hr/>
            <p>Drachenpfad produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'herz', power: 1, price: 10000, haider: this.props.haider}))}} ref={this.pizzaschieberItem} className="item" hidden>
            <img src={pizzaschieber} alt={"ein pizzaschieber"}/>
            <hr/>
            <h1>Ein Pizzaschieber</h1>
            <p>10.000 Haider</p>
            <p>Geeignet für Haider-Kaschper</p>
            <hr/>
            <p>Rotes Herz produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'herz', power: 2, price: 20000, haider: this.props.haider}))}} ref={this.pizzaItem} className="item" hidden>
            <img src={pizza} alt={"eine vegetarische pizza"}/>
            <hr/>
            <h1>Vegetarische Pizza</h1>
            <p>20.000 Haider</p>
            <p>Spezialität im Roten Herz</p>
            <hr/>
            <p>Rotes Herz produziert dreimal so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'rewe', power: 1, price: 40000, haider: this.props.haider}))}} ref={this.monsterItem} className="item" hidden>
            <img src={monster} alt={"ein energy-drink"}/>
            <hr/>
            <h1>Enerdschi</h1>
            <p>40.000 Haider</p>
            <p>Das beste beim Streamen</p>
            <hr/>
            <p>Rewe produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'rewe',  power: 2, price: 80000, haider: this.props.haider}))}} ref={this.honigItem} className="item" hidden>
            <img src={honig} alt={"ein glas honig"}/>
            <hr/>
            <h1>Breitsamer Honig</h1>
            <p>80.000 Haider</p>
            <p>Der "helle Harte", erhöht vielleicht den IQ des Konsumenten</p>
            <hr/>
            <p>Rewe produziert dreimal so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'rewe',  power: 3, price: 160000, haider: this.props.haider}))}} ref={this.ofenkaeseItem} className="item" hidden>
            <img src={ofenkaese} alt={"ein industrieprodukt"}/>
            <hr/>
            <h1>Ofenkäse</h1>
            <p>160.000 Haider</p>
            <p>Gesund für Oger</p>
            <hr/>
            <p>Rewe produziert viermal so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'rewe', power: 4, price: 320000, haider: this.props.haider}))}} ref={this.loeschzwergItem} className="item" hidden>
            <img src={loeschzwerg} alt={"ein freches bier"}/>
            <hr/>
            <h1>Löschzwerg</h1>
            <p>320.000 Haider</p>
            <p>Löscht Haiderdurst effektiv</p>
            <hr/>
            <p>Rewe produziert fünfmal so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'grab', power: 1, price: 640000, haider: this.props.haider}))}} ref={this.lkwItem} className="item" hidden>
            <img src={lkw} alt={"ein lastkraftwagen"}/>
            <hr/>
            <h1>gelibter LKW</h1>
            <p>640.000 Haider</p>
            <p>Vom Besitzer sehr gelibt</p>
            <hr/>
            <p>Rudis Grab produziert doppelt so viele Haider pro Level</p>
          </div>
          <div onClick={() => {this.props.dispatch(addItem({type: 'grab', power: 2, price: 1280000, haider: this.props.haider}))}} ref={this.lugerItem} className="item" hidden>
            <img src={luger} alt={"die goldene luger"}/>
            <hr/>
            <h1>Rudis goldene Luger</h1>
            <p>1.280.000 Haider</p>
            <p>Ehrenauszeichnung aus dem 2 Weltkrieg</p>
            <hr/>
            <p>Rudis Grab produziert dreimal so viele Haider pro Level</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    haider: state.haider,

    pfadLevel: state.pfadLevel,
    herzLevel: state.herzLevel,
    reweLevel: state.reweLevel,
    burgLevel: state.burgLevel,
    schanzeLevel: state.schanzeLevel,
    grabLevel: state.grabLevel,

    pfadPower: state.pfadPower,
    herzPower: state.herzPower,
    rewePower: state.rewePower,
    burgPower: state.burgPower,
    schanzePower: state.schanzePower,
    grabPower: state.grabPower
  }
}

export default connect(mapStateToProps)(Shop);
