import React from 'react';
import pfad from '../static/img/pfad.jpg';
import herz from '../static/img/herz.jpg';
import rewe from '../static/img/rewe.jpg';
import ruine from '../static/img/ruine.jpg';
import schanze from '../static/img/schanze.jpg';
import grab from '../static/img/grab.jpg';
import trautEuch from '../static/audio/trautEuch.mp3';
import pizza from '../static/audio/pizza.mp3';
import markt from '../static/audio/markt.mp3';
import schauerberg from '../static/audio/schauerberg.mp3';
import ruhe from '../static/audio/ruhe.mp3';
import tod from '../static/audio/tod.mp3';
import '../static/css/buildings.css';
import { addLocation } from '../actions'
import { connect } from 'react-redux';

class Locations extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    let pfadLevel = this.props.pfadLevel;
    let herzLevel = this.props.herzLevel;
    let reweLevel = this.props.reweLevel;
    let burgLevel = this.props.burgLevel;
    let schanzeLevel = this.props.schanzeLevel;
    let grabLevel = this.props.grabLevel;

    if (prevProps.pfadLevel === pfadLevel - 1) {
      const pfadAudio = document.getElementsByClassName("pfad-audio-element")[0]
      pfadAudio.play()
    }

    if (prevProps.herzLevel === herzLevel - 1) {
      const herzAudio = document.getElementsByClassName("herz-audio-element")[0]
      herzAudio.play()
    }

    if (prevProps.reweLevel === reweLevel - 1) {
      const reweAudio = document.getElementsByClassName("rewe-audio-element")[0]
      reweAudio.play()
    }

    if (prevProps.burgLevel === burgLevel - 1) {
      const burgAudio = document.getElementsByClassName("burg-audio-element")[0]
      burgAudio.play()
    }

    if (prevProps.schanzeLevel === schanzeLevel - 1) {
      const schanzeAudio = document.getElementsByClassName("schanze-audio-element")[0]
      schanzeAudio.play()
    }

    if (prevProps.grabLevel === grabLevel - 1) {
      const grabAudio = document.getElementsByClassName("grab-audio-element")[0]
      grabAudio.play()
    }
  }

  // Render locations
  render() {
    return (
      <div className="location">
        <h1>Mettproduzenten</h1>
        <p>Kaufe und upgrade Örtlichkeiten in Emskirchen, um Mett und Haider zu produzieren!</p>
        <div className="mettListe">
          <div className="mettLieferant">
            <audio className="pfad-audio-element">
              <source src={trautEuch}></source>
            </audio>
            <img src={pfad} alt="pilgerpfad" />
            <h1>Pilgerpfad (produziert 1 Haider pro Sekunde)</h1>
            <button onClick={() => {this.props.dispatch(addLocation({type: 'pfad', price: this.props.pfadPrice, haider: this.props.haider, haiderProSekunde: 1}))}} >Kaufen ({this.props.pfadPrice} Haider)</button>
            <p>Level: {this.props.pfadLevel}</p>
            <p>generiert aktuell {this.props.pfadLevel} Haider pro Sekunde</p>
          </div>
          <div className="mettLieferant">
            <audio className="herz-audio-element">
              <source src={pizza}></source>
            </audio>
            <img src={herz} alt="rotes Herz" />
            <h1>Rotes Herz (produziert 5 Haider pro Sekunde)</h1>
            <button onClick={() => {this.props.dispatch(addLocation({type: 'herz', price: this.props.herzPrice, haider: this.props.haider, haiderProSekunde: 5}))}} >Kaufen ({this.props.herzPrice} Haider)</button>
            <p>Level: {this.props.herzLevel}</p>
            <p>generiert aktuell {this.props.herzLevel * 5} Haider pro Sekunde</p>
          </div>
          <div className="mettLieferant">
            <audio className="rewe-audio-element">
              <source src={markt}></source>
            </audio>
            <img src={rewe} alt="Rewe" />
            <h1>Rewe (produziert 25 Haider pro Sekunde)</h1>
            <button onClick={() => {this.props.dispatch(addLocation({type: 'rewe', price: this.props.rewePrice, haider: this.props.haider, haiderProSekunde: 25}))}} >Kaufen ({this.props.rewePrice} Haider)</button>
            <p>Level: {this.props.reweLevel}</p>
            <p>generiert aktuell {this.props.reweLevel * 25} Haider pro Sekunde</p>
          </div>
          <div className="mettLieferant">
            <audio className="burg-audio-element">
              <source src={schauerberg}></source>
            </audio>
            <img src={ruine} alt="Burg Eppelein" />
            <h1>Burg Eppelein (produziert 125 Haider pro Sekunde)</h1>
            <button onClick={() => {this.props.dispatch(addLocation({type: 'burg', price: this.props.burgPrice, haider: this.props.haider, haiderProSekunde: 125}))}} >Kaufen ({this.props.burgPrice} Haider)</button>
            <p>Level: {this.props.burgLevel}</p>
            <p>generiert aktuell {this.props.burgLevel * 125} Haider pro Sekunde</p>
          </div>
          <div className="mettLieferant">
            <audio className="schanze-audio-element">
              <source src={ruhe}></source>
            </audio>
            <img src={schanze} alt="Drachenschanze" />
            <h1>Drachenschanze (produziert 625 Haider pro Sekunde)</h1>
            <button onClick={() => {this.props.dispatch(addLocation({type: 'schanze', price: this.props.schanzePrice, haider: this.props.haider, haiderProSekunde: 625}))}} >Kaufen ({this.props.schanzePrice} Haider)</button>
            <p>Level: {this.props.schanzeLevel}</p>
            <p>generiert aktuell {this.props.schanzeLevel * 625} Haider pro Sekunde</p>
          </div>
          <div className="mettLieferant">
            <audio className="grab-audio-element">
              <source src={tod}></source>
            </audio>
            <img src={grab} alt="Grab von Rudi" />
            <h1>Rudi's Grab (produziert 3125 Haider pro Sekunde)</h1>
            <button onClick={() => {this.props.dispatch(addLocation({type: 'grab', price: this.props.grabPrice, haider: this.props.haider, haiderProSekunde: 3125}))}}>Kaufen ({this.props.grabPrice} Haider)</button>
            <p>Level: {this.props.grabLevel}</p>
            <p>generiert aktuell {this.props.grabLevel * 3125} Haider pro Sekunde</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    haider: state['haider'],
    pfadPrice: state['pfadPrice'],
    herzPrice: state['herzPrice'],
    rewePrice: state['rewePrice'],
    burgPrice: state['burgPrice'],
    schanzePrice: state['schanzePrice'],
    grabPrice: state['grabPrice'],
    pfadLevel: state['pfadLevel'],
    herzLevel: state['herzLevel'],
    reweLevel: state['reweLevel'],
    burgLevel: state['burgLevel'],
    schanzeLevel: state['schanzeLevel'],
    grabLevel: state['grabLevel']
  }
}

export default connect(mapStateToProps)(Locations);
