import React from 'react';
import classes from './App.module.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./Redux/initReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {getIsInitializing} from "./Redux/initSelectors";
import {compose} from "redux";
import store from "./Redux/reduxStore";
import {withSuspense} from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = () => {
        alert("Some error occured.");
        //console.error(promiseRejectionEvent);
    };

    componentDidMount() {
        this.props.initializeAppThunkCreator();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={classes.appWrapper}>
                <HeaderContainer/>
                <NavBar/>
                <div className={classes.appWrapperContent}>
                    <Switch>
                        <Redirect exact from='/' to='/profile'/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: getIsInitializing(state)
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default MainApp;