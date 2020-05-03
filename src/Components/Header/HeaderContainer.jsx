import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {doLogoutThunkCreator} from "../../Redux/authReducer";
import {getIsAuth, getLogin} from "../../Redux/authSelector";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});

export default connect(mapStateToProps, {doLogoutThunkCreator})(HeaderContainer);