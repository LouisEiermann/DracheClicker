import React from 'react';
import { resetProgress } from '../actions';
import { connect } from 'react-redux';

class Settings extends React.Component {
    render() {
        return (
            <div>
                <h1>Einstellungen</h1>
                <button onClick={() => this.props.dispatch(resetProgress())}>Fortschritt zurücksetzen</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Settings);