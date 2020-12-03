import React from 'react';
import {connect} from 'react-redux';
import {triggerEvent} from '../actions';

class Events extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Neues Event in: {this.props.timer}</h1>
                    <p>Events lösen einen zufälligen Effekt aus</p>
                    <button onClick={() => this.props.dispatch(triggerEvent({timer: this.props.timer}))}>Event auslösen
                    </button>
                </div>
                <div>
                    <img src={this.props.currentEvent.eventImage}/>
                    <h1>{this.props.currentEvent.eventName}</h1>
                    <p>{this.props.currentEvent.eventText}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        timer: state['timer'],
        currentEvent: state['currentEvent']
    }
}

export default connect(mapStateToProps)(Events);