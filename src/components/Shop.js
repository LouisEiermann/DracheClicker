import React from 'react';
import { connect } from 'react-redux';
import '../static/css/shop.css';
import frosch from '../static/img/frosch.jpg';
import monster from '../static/img/monster.jpg';
import ofenkäse from '../static/img/ofenkäse.jpg';
import honig from '../static/img/honig.jpg';
import lkw from '../static/img/lkw.jpg';
import pizzaschieber from '../static/img/pizzaschieber.jpg';
import { addPfadPower } from '../actions'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.froschItem = React.createRef();
    this.pizzaschieberItem = React.createRef();
    this.monsterItem = React.createRef();
    this.honigItem = React.createRef();
    this.ofenkäseItem = React.createRef();
    this.lkwItem = React.createRef();
  }

  // Check if upgrades need to be mounted or unmounted after purchase
  componentDidUpdate() {

    // Check if upgrades need to be mounted
    var haiders = this.props.haiders;

    if (haiders > 0) {
      this.froschItem.current.style.display = "table-row";
    }

    if (haiders > 100) {
      this.pizzaschieberItem.current.style.display = "table-row";
    }

    if (haiders > 100) {
      this.monsterItem.current.style.display = "table-row";
    }

    if (haiders > 100) {
      this.honigItem.current.style.display = "table-row";
    }

    if (haiders > 100) {
      this.ofenkäseItem.current.style.display = "table-row";
    }

    if (haiders > 100) {
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
          <div onClick={() => {this.props.dispatch(addPfadPower([10, this.props.haiders]))}} ref={this.froschItem} className="item" hidden>
            <img src={frosch} alt={"ein frosch"}/>
            <hr/>
            <h1>a Frosch</h1>
            <p>10 Haider</p>
            <p>Hahahaha, a Frosch!</p>
            <hr/>
            <p>Drachenpfad produziert doppelt so viele Haider pro Level</p>
          </div>
          <div ref={this.pizzaschieberItem} className="item" hidden>
            <img src={pizzaschieber} alt={"ein pizzaschieber"}/>
            <hr/>
            <h1>Ein Pizzaschieber</h1>
            <p>Geeignet für Haider-Kaschper</p>
            <hr/>
            <p>Rotes Herz produziert doppelt so viele Haider pro Level</p>
          </div>
          <div ref={this.monsterItem} className="item" hidden>
            <img src={monster} alt={"ein energy-drink"}/>
            <hr/>
            <h1>Enerdschi</h1>
            <p>Das beste beim Streamen</p>
            <hr/>
            <p>Rewe produziert doppelt so viele Haider pro Level</p>
          </div>
          <div ref={this.honigItem} className="item" hidden>
            <img src={honig} alt={"ein glas honig"}/>
            <hr/>
            <h1>Breitsamer Honig</h1>
            <p>Der "helle Harte", erhöht vielleicht den IQ des Konsumenten</p>
            <hr/>
            <p>Rewe produziert dreimal so viele Haider pro Level</p>
          </div>
          <div ref={this.ofenkäseItem} className="item" hidden>
            <img src={ofenkäse} alt={"ein industrieprodukt"}/>
            <hr/>
            <h1>Ofenkäse</h1>
            <p>Gesund für Oger</p>
            <hr/>
            <p>Rewe produziert viermal so viele Haider pro Level</p>
          </div>
          <div ref={this.lkwItem} className="item" hidden>
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
    haiders: state.haiders,
    pfadPower: state.pfadPower
  }
}

export default connect(mapStateToProps)(Shop);
