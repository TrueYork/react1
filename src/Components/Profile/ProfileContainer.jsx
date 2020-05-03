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
import {getIsAuth, getUserId} from "../../Redux/authSelector";
import {getProfile, getProfileStatus} from "../../Redux/profileSelector";

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
        //console.log('render PROFILE');
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateProfileStatusThunkCreator}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    //console.log('mapStateToProps PROFILE');
    return ({
    profile: getProfile(state),
    status: getProfileStatus(state),
    currentActiveUserId: getUserId(state),
    isAuth: getIsAuth(state)

});
};


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
