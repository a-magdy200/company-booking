import React, { Component } from 'react';
import './App.css';
import './assets/styles/shared.css';
import HomeComponent from "./pages/Home/HomeComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';
import AuthComponent from "./pages/Auth/AuthComponent";
import {HeaderComponent} from "./shared";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <HeaderComponent />
              <Switch>
                  <Route exact path={"/"}>
                      <HomeComponent/>
                  </Route>
                  <Route path={"/new-request"}>
                      <AuthComponent/>
                  </Route>
                  <Route path={"/requests-list"}>
                      <AuthComponent/>
                  </Route>
                  <Route path={"/login"}>
                      <AuthComponent/>
                  </Route>
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
