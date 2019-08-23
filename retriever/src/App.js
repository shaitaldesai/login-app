import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceList: [
      {name: 'device1', num: 1}, 
      {name: 'device2', num: 2}, 
      {name: 'device3', num: 3}
      ]
    }
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
       <h2> DeviceList </h2>
        <div>
        </div>
      </header>
    </div>
    )
  }
}

export default App;
