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
import { HeaderComponent } from "./shared";

import ClientRoutes from "./pages/Client/ClientRoutes";
import AdminRoutes from "./pages/admin/AdminRoutes";
import InspectorRoutes from "./pages/inspector/InspectorRoutes";
import RenderHeader from "./pages/RenderHeader";

const App = (props) => {
    const user = 'b';
    return (
        <div className="App">
            <Router>

                { RenderHeader(user) }

                <Switch>
                    <Route path={"/login"} component={AuthComponent}/>
                    <Route path={"/logout"} component={AuthComponent}/>
                    <Route render={() => {
                            if (user === 'a') {
                                return <ClientRoutes user={user}/>;
                            } else if (user === 'b') {
                                return <InspectorRoutes user={user}/>;
                            } else if (user === 'c') {
                                return <AdminRoutes user={user}/>;
                            } else {
                                return <div>Not Found</div>;
                            }
                        }
                    } />
                </Switch>
            </Router>
        </div>
    );
};

export default connect()(App);
