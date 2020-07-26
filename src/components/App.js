import React from 'react';
import Progress from './Progress';
import Shop from './Shop';
import Buildings from './Locations';
import '../static/css/grid.css';
import '../static/css/main.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flexelement">
          <Progress />
        </div>
        <div className="flexelement">
          <Buildings className="flexelement" />
        </div>
        <div className="flexelement">
          <Shop className="flexelement" />
        </div>
      </div>
    );
  }
}

export default App;
