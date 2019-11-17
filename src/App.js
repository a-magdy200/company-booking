import React from 'react';
import './App.css';
import './assets/styles/shared.css';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import ClientRoutes from "./pages/Client/ClientRoutes";
import AdminRoutes from "./pages/admin/AdminRoutes";
import InspectorRoutes from "./pages/inspector/InspectorRoutes";
import RenderHeader from "./pages/RenderHeader";
import {logoutUser} from "./redux/actions/userActions";
import ProfileComponent from "./pages/Profile/ProfileComponent";
import {redirectHome} from "./shared/functions";
import {PrivateRoute} from "./shared";
import NewLoginComponent from "./pages/Auth/NewLoginComponent";
import AuthComponent from "./pages/Auth/AuthComponent";
import SideBarComponent from "./pages/shared/SideBar";
const App = ({ user, logout }) => {
    const { role, isLoggedIn } = user;
    return (
        <div className="App">
            <SideBarComponent/>
            <Router>

                { RenderHeader(role) }

                <Switch>
                    <Route path={"/login"} component={AuthComponent}/>
                    <Route path={"/logout"} render={ () => {
                        logout();
                        return redirectHome();
                    }}/>
                    <Route path={"/register"} component={AuthComponent}/>
                    <Route render={
                        ({match}) => {
                            if (match !== '/login' && match !== '/register' && match !== '/logout') {
                                if (!isLoggedIn) {
                                    return redirectHome();
                                }
                            }
                            if (role === 'client') {
                                return <ClientRoutes user={user}/>;
                            } else if (role === 'inspector') {
                                return <InspectorRoutes user={user}/>;
                            } else if (role === 'admin') {
                                return <AdminRoutes user={user}/>;
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
