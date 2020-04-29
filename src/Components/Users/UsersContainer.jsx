import React from 'react';
import {connect} from "react-redux";
import {
    acceptFollowThunkCreator, getUsersThunkCreator,
    toggleInProgressOperation,
    acceptUnfollowThunkCreator
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageN) => {
        this.props.getUsersThunkCreator(pageN, this.props.pageSize);
    };

    render() {
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

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isOperationInProgress: state.usersPage.isOperationInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        acceptFollowThunkCreator,
        acceptUnfollowThunkCreator,
        toggleInProgressOperation,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)