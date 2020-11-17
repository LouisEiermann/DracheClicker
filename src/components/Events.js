import React from 'react';
import { connect } from 'react-redux';

class Events extends React.Component {
    render() {
        return (
            <div>
                <h1>Events</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Events);