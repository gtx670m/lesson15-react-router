import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import routes from './routes';

class App extends Component {
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        );
      });
    }
    return result;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
