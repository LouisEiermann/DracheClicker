import React from 'react';
import Progress from './Progress';
import Shop from './Shop';
import Buildings from './Locations';
import Settings from './Settings';
import '../static/css/grid.css';
import '../static/css/main.css';

class App extends React.Component {
  render() {
    document.title = "Drachenclicker"
    return (
      <div className="container">
        <div className="flexelement">
          <Progress />
        </div>
        <div className="flexelement">
          <Buildings />
        </div>
        <div className="flexelement">
          <Shop />
        </div>
        <div className="flexelement">
          <Settings />
        </div>
      </div>
    );
  }
}

export default App;
