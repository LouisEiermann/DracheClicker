import React from 'react';
import drache from '../static/img/drache.png';
import '../static/css/progress.css'
import { connect } from 'react-redux';
import { addHaider } from '../actions';
import { store } from '../index';

class Progress extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    var pfad = this.props.pfadLevel;
    var herz = this.props.herzLevel;
    var rewe = this.props.reweLevel;
    var burg = this.props.burgLevel;
    var schanze = this.props.schanzeLevel;
    var grab = this.props.grabLevel;

    // Check for upgrades of buildings
    if (prevProps.pfadLevel === pfad - 1) {
      (function(delay, callback) {
          pfad = prevProps.pfadLevel;
          var loop = function(){
              callback();
              setTimeout(loop, delay);
          }; loop();
      })(1000, function(){store.dispatch(addHaider(1))});
    }

    if (prevProps.herzLevel === herz - 1) {
      (function(delay, callback) {
          herz = prevProps.herzLevel;
          var loop = function(){
              callback();
              setTimeout(loop, delay);
          }; loop();
      })(1000, function(){store.dispatch(addHaider(5))});
    }

    if (prevProps.reweLevel === rewe - 1) {
      (function(delay, callback) {
          rewe = prevProps.reweLevel;
          var loop = function(){
              callback();
              setTimeout(loop, delay);
          }; loop();
      })(1000, function(){store.dispatch(addHaider(20))});
    }

    if (prevProps.burgLevel === burg - 1) {
      (function(delay, callback) {
          burg = prevProps.burgLevel;
          var loop = function(){
              callback();
              setTimeout(loop, delay);
          }; loop();
      })(1000, function(){store.dispatch(addHaider(100))});
    }

    if (prevProps.schanzeLevel === schanze - 1) {
      (function(delay, callback) {
          schanze = prevProps.schanzeLevel;
          var loop = function(){
              callback();
              setTimeout(loop, delay);
          }; loop();
      })(1000, function(){store.dispatch(addHaider(1000))});
    }

    if (prevProps.grabLevel === grab - 1) {
      (function(delay, callback) {
          grab = prevProps.grabLevel;
          var loop = function(){
              callback();
              setTimeout(loop, delay);
          }; loop();
      })(1000, function(){store.dispatch(addHaider(50000))});
    }
  }

  render() {
    return (
      <div>
        <div className="progress">
          <h1 className="haiders-total">Haider: {this.props.haiders}</h1>
          <h2 className="haiders-ps">{this.props.haiderProSekunde} neue Haider pro Sekunde</h2>
        </div>
        <div className="schanze">
          <img onClick={() => this.props.dispatch(addHaider(1))} src={drache} alt="drachenlord" />
          <p>Klicken, um Haider anzusammeln</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    haiders: state.haiders,
    haiderProSekunde: state.haiderProSekunde,
    pfadLevel: state.pfadLevel,
    herzLevel: state.herzLevel,
    reweLevel: state.reweLevel,
    burgLevel: state.burgLevel,
    schanzeLevel: state.schanzeLevel,
    grabLevel: state.grabLevel
  }
}

export default connect(mapStateToProps)(Progress);
