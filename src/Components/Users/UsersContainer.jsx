import React from 'react';
import {connect} from "react-redux";
import {
    acceptFollowThunkCreator, getUsersThunkCreator,
    toggleInProgressOperation,
    acceptUnfollowThunkCreator
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
//import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsOperationInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../Redux/userSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChange = (pageN) => {
        let {pageSize} = this.props.pageSize;
        this.props.getUsersThunkCreator(pageN, pageSize);
    };

    render() {
        //console.log("render USERS");
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} onPageChange={this.onPageChange}
                   acceptFollowThunkCreator={this.props.acceptFollowThunkCreator}
                   acceptUnfollowThunkCreator={this.props.acceptUnfollowThunkCreator}
                   isOperationInProgress={this.props.isOperationInProgress}/>
        </>
    }
}

/*const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isOperationInProgress: state.usersPage.isOperationInProgress
    }
};*/

const mapStateToProps = (state) => {
    //console.log("mapStateToProps USERS");
    return {
        //users: getUsersSelector(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isOperationInProgress: getIsOperationInProgress(state)
    }
};

/*
export default compose(
    connect(mapStateToProps, {
        acceptFollowThunkCreator,
        acceptUnfollowThunkCreator,
        toggleInProgressOperation,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)*/
export default compose(
    connect(mapStateToProps, {
        acceptFollowThunkCreator,
        acceptUnfollowThunkCreator,
        toggleInProgressOperation,
        getUsersThunkCreator
    })
)(UsersContainer)
