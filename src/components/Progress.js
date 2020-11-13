import React from 'react';
import drache from '../static/img/drache.png';
import '../static/css/progress.css'
import { connect } from 'react-redux';
import { addHaider, tick } from '../actions';
import { store } from '../index';

class Progress extends React.Component {
  componentDidMount(prevProps, prevState) {
    setInterval(function(){store.dispatch(tick())}, 1000);
  }

  render() {
    return (
      <div>
        <div className="progress">
          <h1 className="haiders-total">Haider: {this.props.haider}</h1>
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
    haider: state['haider'],
    haiderProSekunde: state['haiderProSekunde']
  }
}

export default connect(mapStateToProps)(Progress);
