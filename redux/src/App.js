import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function isIP(str) {
	var arr = str.split('.')
	console.log(arr)
	if(arr.length < 4){
		console.log('ip地址不合法')
		return
	}else {
		for(var i = 0; i < arr.length; i++){
			if(Number.isInteger(arr[i]) || parseInt(arr[i]) < 0 || parseInt(arr[i]) > 255){
				console.log('ip地址不合法')
				return
			}
		}
	}
	console.log('合法')
	return
}
isIP('192.168.0.1')

export default App;
