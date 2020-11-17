import React from 'react';
import { resetProgress, switchAudio } from '../actions';
import { connect } from 'react-redux';

class Settings extends React.Component {
    render() {
        return (
            <div>
                <h1>Einstellungen</h1>
                <button onClick={() => this.props.dispatch(resetProgress())}>Fortschritt zurücksetzen</button>
                <button onClick={() => this.props.dispatch(switchAudio())}>Ton {this.props.audio ? 'an' : 'aus'}</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        audio: state['audio']
    }
}

export default connect(mapStateToProps)(Settings);