import React from 'react';
import './App.css';
import './assets/styles/shared.css';
import HomeComponent from "./pages/Home/HomeComponent";
import {connect, Provider} from 'react-redux';
import {createStore} from "redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
    withRouter
} from 'react-router-dom';
import AuthComponent from "./pages/Auth/AuthComponent";
import {HeaderComponent} from "./shared";
import store from "./redux/store";

const App = (props) => {
    return (
        <div className="App">
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route exact path={"/"} component={HomeComponent}/>
                    <Route path={"/new-request"} component={AuthComponent}/>
                    <Route path={"/requests-list"} component={AuthComponent} />
                    <Route path={"/login"} component={AuthComponent}/>
                </Switch>
            </Router>
        </div>
    );
};

export default connect()(App);
