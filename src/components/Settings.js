import React from 'react'
import { resetProgress, switchAudio, switchMusic } from '../actions';
import { connect } from 'react-redux';
import luegenlord from '../static/audio/music/luegenlord.mp3';


class Settings extends React.Component {

componentDidUpdate() {
    const music = document.getElementsByClassName("music")[0];
    if (this.props.music === true) {
        music.play()
    } else {
        music.pause();
    }
}

    render() {
        return (
            <div>
                <audio className="music">
                    <source src={luegenlord} type="audio/mp3"/>
                </audio>
                <h1>Einstellungen</h1>
                <div>
                    <button className="settings_button" onClick={() => this.props.dispatch(resetProgress())}>Fortschritt zurücksetzen</button>
                </div>
                <div>
                    <button className="settings_button" onClick={() => this.props.dispatch(switchAudio())}>Sounds: {this.props.audio ? 'an' : 'aus'}</button>
                </div>
                <div>
                    <button className="settings_button" onClick={() => this.props.dispatch(switchMusic())}>Musik: {this.props.music ? 'an' : 'aus'}</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        audio: state['audio'],
        music: state['music']
    }
}

export default connect(mapStateToProps)(Settings);