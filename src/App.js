import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./pages/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
