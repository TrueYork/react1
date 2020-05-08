import React from 'react';
import classes from './App.module.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./Redux/initReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {getIsInitializing} from "./Redux/initSelectors";
import {compose} from "redux";
import store from "./Redux/reduxStore";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeAppThunkCreator()
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
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
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