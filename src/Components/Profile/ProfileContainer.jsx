import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    obtainProfileDataThunkCreator,
    updateProfileStatusThunkCreator
} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentActiveUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.obtainProfileDataThunkCreator(userId);
        this.props.getProfileStatusThunkCreator(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateProfileStatusThunkCreator}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentActiveUserId: state.auth.userId,
    isAuth: state.auth.isAuth

});


/*export default compose(
    connect(mapStateToProps, {
        obtainProfileDataThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);*/
export default compose(
    connect(mapStateToProps, {
        obtainProfileDataThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator
    }),
    withRouter
)(ProfileContainer);
