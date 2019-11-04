import React from 'react';
import './App.css';
import './assets/styles/shared.css';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import AuthComponent from "./pages/Auth/AuthComponent";

import ClientRoutes from "./pages/Client/ClientRoutes";
import AdminRoutes from "./pages/admin/AdminRoutes";
import InspectorRoutes from "./pages/inspector/InspectorRoutes";
import RenderHeader from "./pages/RenderHeader";
import {logoutUser} from "./redux/actions/userActions";
import ProfileComponent from "./pages/Profile/ProfileComponent";
import {redirectHome} from "./shared/functions";
import {PrivateRoute} from "./shared";
const App = ({ user, logout }) => {
    const { role, isLoggedIn } = user;
    return (
        <div className="App">
            <Router>

                { RenderHeader(role) }

                <Switch>
                    <Route path={"/login"} component={AuthComponent}/>
                    <Route path={"/logout"} render={ () => {
                        logout();
                        return redirectHome();
                    }}/>
                    <Route path={"/register"} component={AuthComponent}/>
                    <Route render={() => {
                            if (!isLoggedIn) {
                                return <Redirect to={'/login'} />
                            }
                            if (role === 'client') {
                                return <ClientRoutes user={user}/>;
                            } else if (role === 'inspector') {
                                return <InspectorRoutes user={user}/>;
                            } else if (role === 'admin') {
                                return <AdminRoutes user={user}/>;
                            } else {
                                return redirectHome();
                            }
                        }
                    } />
                    <PrivateRoute user={user} path={'/profile'} component={ProfileComponent}/>
                </Switch>
            </Router>
        </div>
    );
};
const mapStateToProps = ({ user }) => {
    return { user: { ...user }};
};
const mapDispatchToProps = dispatch => {
    return {logout: () => dispatch(logoutUser())};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
