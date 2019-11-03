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

import ClientRoutes from "./pages/Client/ClientRoutes";
import AdminRoutes from "./pages/admin/AdminRoutes";
import InspectorRoutes from "./pages/inspector/InspectorRoutes";
import RenderHeader from "./pages/RenderHeader";
const client = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'example@domain.com',
    id: 3,
    role: 'client',
};
const inspector = {
    first_name: 'Mary',
    last_name: 'Jane',
    email: 'example2@domain.com',
    id: 13,
    role: 'inspector',
};
const App = ({ user }) => {
    console.log(user);
    // const user = client;
    const { role } = user;
    return (
        <div className="App">
            <Router>

                { RenderHeader(role) }

                <Switch>
                    <Route path={"/login"} component={AuthComponent}/>
                    <Route path={"/logout"} component={AuthComponent}/>
                    <Route render={() => {
                            if (role === 'client') {
                                return <ClientRoutes user={user}/>;
                            } else if (role === 'inspector') {
                                return <InspectorRoutes user={user}/>;
                            } else if (role === 'admin') {
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
const mapStateToProps = ({ user }) => {
    return { user: { ...user }};
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
