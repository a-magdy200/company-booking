import React from 'react';
import './App.css';
import './assets/styles/shared.css';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import AuthComponent from "./pages/Auth/AuthComponent";
import HomeComponent from "./pages/Home/HomeComponent";
import {HeaderComponent} from "./shared";
import AllInspectionsComponent from "./pages/all-inspections/AllInspectionsComponent";

const App = (props) => {
    return (
        <div className="App">
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route exact path={"/"} component={HomeComponent}/>
                    <Route path={"/new-request"} component={AuthComponent}/>
                    <Route path={"/requests-list"} component={AllInspectionsComponent} />
                    <Route path={"/login"} component={AuthComponent}/>
                </Switch>
            </Router>
        </div>
    );
};

export default connect()(App);
