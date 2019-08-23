import React from 'react';
import $ from 'jquery';
import DeviceList from './deviceList.js';
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

componentDidMount() {
    console.log('inside componentDidMount');
    var self = this;
    $.ajax({
      url: '/devices',
      method: 'GET',
      // data: {userName: 'testUser', password: 'abc123ABC$$$'},
      success: (data) => {
        console.log('DATA', data);
        self.setState({
          deviceList: data
        });
        console.log('SELF', self.state.data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
       <h2> DeviceList </h2>
        <div>
          <DeviceList list={this.state.deviceList} />
        </div>
      </header>
    </div>
    )
  }
}

export default App;
