import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login.js';


class App extends Component {
  render() {
    return (
      // <body>
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
      // </body>


      // <div className="App">

      // </div>
    );
  }
}

export default App;
